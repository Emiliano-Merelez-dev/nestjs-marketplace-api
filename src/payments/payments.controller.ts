import { Controller, Post, Body } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Payments')
@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Post('check')
  create(@Body() checkPaymentDto: CreatePaymentDto) {
    return this.paymentsService.checkPaymentsStatus(checkPaymentDto);
  }
}
