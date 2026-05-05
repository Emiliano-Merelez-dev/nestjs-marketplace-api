import { ApiProperty } from '@nestjs/swagger';
import {
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  IsUUID,
  Max,
  Min,
} from 'class-validator';

export class CreateReviewDto {
  @ApiProperty({
    example: 5,
    description: 'Product rating score (from 1 to 5)',
    minimum: 1,
    maximum: 5,
  })
  @IsNumber()
  @Min(1)
  @Max(5)
  @IsPositive()
  rating: number;

  @ApiProperty({
    example: 'Awesome product, highly recommended!',
    description: 'User feedback or opinion about the product',
    required: false,
  })
  @IsString()
  @IsOptional()
  comment?: string;

  @ApiProperty({
    example: 'cd533345-f1f3-48c9-a62e-7dc2da50c8f8',
    description: 'The unique UUID of the product being reviewed',
  })
  @IsUUID('4', { message: 'a valid productID' })
  productId: string;
}
