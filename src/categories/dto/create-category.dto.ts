import { IsOptional, IsString, MinLength } from 'class-validator';

export class CreateCategoryDto {
  @IsString()
  @MinLength(1)
  name_category: string;

  @IsString()
  slug: string;

  @IsString()
  @IsOptional()
  description: string;
}
