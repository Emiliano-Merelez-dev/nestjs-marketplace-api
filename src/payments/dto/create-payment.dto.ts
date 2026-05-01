import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreatePaymentDto {
  @ApiProperty({
    example: '98H60553TS287434D',
    description: 'The PayPal Transaction ID received from the frontend/PayPal',
  })
  @IsString()
  transactionId: string;
}
