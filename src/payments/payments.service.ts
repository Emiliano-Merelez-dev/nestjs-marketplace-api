import {
  BadRequestException,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ConfigService } from '@nestjs/config';

import { Order } from 'src/orders/entities/order.entity';
import { OrderStatus } from 'src/orders/entities/order-status.enum';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { PayPalOrderStatusResponse } from './interfaces/paypal.order.interface';

@Injectable()
export class PaymentsService {
  private readonly logger = new Logger('PaymentsService');

  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
    private readonly configService: ConfigService,
  ) {}

  async checkPaymentsStatus(checkPaymentDto: CreatePaymentDto) {
    const { transactionId } = checkPaymentDto;
    const authToken = await this.getPayPalBearerToken();

    if (!authToken) {
      throw new BadRequestException('Could not obtain access token.');
    }

    const paypalData = await this.verifyPayPalPayment(transactionId, authToken);

    if (!paypalData || (!paypalData.status && !paypalData.amount)) {
      this.logger.error(`Payment failed or not found: ${transactionId}`);
      throw new BadRequestException('Could not verify PayPal transaction.');
    }

    const orderId =
      paypalData.purchase_units?.[0]?.invoice_id ||
      paypalData.custom_id ||
      paypalData.invoice_id;

    const paypalAmount =
      paypalData.purchase_units?.[0]?.amount?.value || paypalData.amount?.value;

    const order = await this.orderRepository.findOneBy({ id: orderId });
    if (!order) {
      throw new NotFoundException(`Order with ID ${orderId} not found.`);
    }

    if (order.isPaid) {
      this.logger.warn(
        `Attempted re-payment for already finished order: ${orderId}`,
      );
      throw new BadRequestException('This order has already been paid.');
    }

    if (Math.abs(+paypalAmount - order.total) > 0.01) {
      this.logger.warn(`Incorrect payment amount attempt. Order: ${orderId}`);
      throw new BadRequestException(
        'The paid amount does not match the order total.',
      );
    }

    await this.orderRepository.update(order.id, {
      isPaid: true,
      paidAt: new Date(),
      transactionId: transactionId,
      status: OrderStatus.PAID,
    });

    this.logger.log(
      `Order ${orderId} successfully paid with transaction: ${transactionId}`,
    );

    return {
      ok: true,
      message: 'Payment verified and order updated successfully.',
    };
  }

  private async getPayPalBearerToken(): Promise<string | null> {
    const PAYPAL_CLIENT_ID = this.configService.get('PAYPAL_CLIENT_ID');
    const PAYPAL_SECRET = this.configService.get('PAYPAL_SECRET');
    const oauth2Url = this.configService.get('PAYPAL_OAUTH_URL');

    const base64Token = Buffer.from(
      `${PAYPAL_CLIENT_ID}:${PAYPAL_SECRET}`,
      'utf-8',
    ).toString('base64');

    try {
      const resp = await fetch(oauth2Url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: `Basic ${base64Token}`,
        },
        body: 'grant_type=client_credentials',
      }).then((r) => r.json());

      return resp.access_token;
    } catch (error) {
      this.logger.error('Error obtaining PayPal Token', error);
      return null;
    }
  }

  private async verifyPayPalPayment(
    id: string,
    token: string,
  ): Promise<PayPalOrderStatusResponse | null> {
    const orderUrl = `${this.configService.get('PAYPAL_ORDERS_URL')}/${id}`;

    try {
      const resp = await fetch(orderUrl, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await resp.json();

      if (!resp.ok) {
        const captureUrl = orderUrl.replace(
          '/checkout/orders',
          '/payments/captures',
        );
        const respCap = await fetch(captureUrl, {
          headers: { Authorization: `Bearer ${token}` },
        });
        return await respCap.json();
      }
      return data;
    } catch (error) {
      this.logger.error('Error verifying payment in PayPal', error);
      return null;
    }
  }
}
