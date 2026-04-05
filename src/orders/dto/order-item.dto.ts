import { IsInt, IsPositive, IsString, IsUUID } from 'class-validator';

export class OrderItemDto {
  @IsUUID()
  productId: string;

  @IsInt()
  @IsPositive()
  quantity: number;

  @IsString()
  size: string;
}
