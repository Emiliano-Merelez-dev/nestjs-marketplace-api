import { PartialType } from '@nestjs/mapped-types';
import { CreateOrderDto } from './create-order.dto';
import { IsEnum, IsOptional } from 'class-validator';
import { OrderStatus } from '../entities/order-status.enum';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateOrderDto extends PartialType(CreateOrderDto) {
  @ApiProperty({
    enum: OrderStatus,
    description: 'Update the current status of the order',
    required: false,
  })
  @IsOptional()
  @IsEnum(OrderStatus)
  status?: OrderStatus;
}
