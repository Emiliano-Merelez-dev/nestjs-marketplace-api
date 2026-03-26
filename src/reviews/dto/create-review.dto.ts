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
  @IsNumber()
  @Min(1)
  @Max(5)
  @IsPositive()
  rating: number;

  @IsString()
  @IsOptional()
  comment?: string;

  @IsUUID('4', { message: 'a valid productID' })
  productId: string;
}
