import { Controller, Post, Body } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { CreatePaymentDto } from './dto/create-payment.dto';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('Payments')
@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Post('check')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Verify a PayPal transaction' })
  @ApiResponse({
    status: 201,
    description: 'Payment verified and Order updated to PAID',
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid Transaction ID or Order already paid',
  })
  @ApiResponse({ status: 404, description: 'Order not found' })
  checkPayment(@Body() checkPaymentDto: CreatePaymentDto) {
    return this.paymentsService.checkPaymentsStatus(checkPaymentDto);
  }
}
