import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsPositive, IsString, IsUUID } from 'class-validator';

export class OrderItemDto {
  @ApiProperty({
    example: 'cd533345-f1f3-48c9-a62e-7dc2da50c8f8',
    description: 'Product ID (UUID)',
  })
  @IsUUID()
  productId: string;

  @ApiProperty({
    example: 2,
    description: 'Quantity of the product',
  })
  @IsInt()
  @IsPositive()
  quantity: number;

  @ApiProperty({
    example: 'M',
    description: 'Selected size for the product',
  })
  @IsString()
  size: string;
}
