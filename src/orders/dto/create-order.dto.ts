import { Type } from 'class-transformer';
import { IsArray, ValidateNested } from 'class-validator';
import { OrderItemDto } from './order-item.dto';
import { ApiProperty } from '@nestjs/swagger';

export class CreateOrderDto {
  @ApiProperty({
    type: [OrderItemDto],
    description: 'List of products to include in the order',
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => OrderItemDto)
  items: OrderItemDto[];
}
