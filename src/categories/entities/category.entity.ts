import { ApiProperty } from '@nestjs/swagger';
import { Product } from 'src/products/entities/product.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('categories')
export class Category {
  @ApiProperty({
    example: '8e1c6670-56d1-460b-9366-0736e1c4840d',
    description: 'Category ID',
    uniqueItems: true,
  })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({
    example: 'sportswear',
    description: 'name of the category',
    uniqueItems: true,
  })
  @Column('text', { unique: true })
  name_category: string;

  @ApiProperty({
    example: 'sportswear_shoes',
    description: 'Category slug for SEO friendly URLs',
    uniqueItems: true,
  })
  @Column('text', { unique: true })
  slug: string;

  @ApiProperty({
    example: 'All items related to professional sports and athletic gear',
    description: 'Brief description of the category',
    nullable: true,
  })
  @Column('text', { nullable: true })
  description: string;

  @ApiProperty({
    type: () => Product,
    isArray: true,
    description: 'List of products belonging to this category',
  })
  @OneToMany(() => Product, (product) => product.category)
  products: Product[];
}
