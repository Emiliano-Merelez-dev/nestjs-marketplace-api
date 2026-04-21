import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import type { Product } from './product.entity';
import { Product as ProductEntity } from './product.entity';

@Entity({ name: 'product_images' })
export class ProductImage {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  url: string;

  @ManyToOne(() => ProductEntity, (product) => product.images, {
    onDelete: 'CASCADE',
  })
  product: Product;
}
