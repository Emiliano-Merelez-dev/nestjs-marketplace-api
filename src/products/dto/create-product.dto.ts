import { ApiProperty } from '@nestjs/swagger';

import {
  IsArray,
  IsIn,
  IsInt,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateProductDto {
  @ApiProperty({
    description: 'Product title (unique)',
    nullable: false,
    minLength: 1,
    example: 'Nike air Max 2026',
  })
  @IsString()
  @MinLength(1)
  title: string;

  @ApiProperty({ example: 120.5 })
  @IsNumber()
  @IsPositive()
  @IsOptional()
  price?: number;

  @ApiProperty()
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  slug?: string;

  @ApiProperty()
  @IsInt()
  @IsPositive()
  @IsOptional()
  stock?: number;

  @ApiProperty({
    example: ['M', 'L', 'XL'],
    description: 'Available sizes',
    isArray: true,
  })
  @IsString({ each: true })
  @IsArray()
  sizes: string[];

  @ApiProperty({
    enum: ['men', 'women', 'kid', 'unisex'],
    example: 'men',
  })
  @IsString()
  @IsIn(['men', 'women', 'kid', 'unisex'])
  gender: string;

  @ApiProperty({
    example: ['running', 'shoes', 'sport'],
    isArray: true,
    required: false,
  })
  @IsString({ each: true })
  @IsArray()
  @IsOptional()
  tags?: string[];

  @ApiProperty({
    description: 'ID or name of the category',
    example: 'Footwear',
  })
  @IsString()
  category: string;

  @ApiProperty({
    example: ['https://image1.jpg', 'https://image2.jpg'],
    isArray: true,
    required: false,
  })
  @IsString({ each: true })
  @IsArray()
  @IsOptional()
  images?: string[];
}
