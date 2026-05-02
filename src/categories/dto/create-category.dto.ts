import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, MinLength } from 'class-validator';

export class CreateCategoryDto {
  @ApiProperty({
    example: 'Sportswear',
    description: 'The name of the category',
    minLength: 1,
  })
  @IsString()
  @MinLength(1)
  name_category: string;

  @ApiProperty({
    example: 'sportswear',
    description: 'URL-friendly version of the name',
    required: false,
  })
  @IsString()
  slug: string;

  @ApiProperty({
    example: 'High-quality athletic clothing and gear',
    description: 'A brief description of what this category contains',
    required: false,
  })
  @IsString()
  @IsOptional()
  description: string;
}
