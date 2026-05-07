import { User } from 'src/auth/entities/user.entity';
import { Category } from 'src/categories/entities/category.entity';
import { Review } from 'src/reviews/entities/review.entity';
import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ProductImage } from './product-image.entity';
import { OrderItem } from 'src/orders/entities/order-item.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'products' })
export class Product {
  @ApiProperty({
    example: 'cd533345-f1f3-48c9-a62e-7dc2da50c8f8',
    description: 'Product ID',
    uniqueItems: true,
  })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({
    example: 'T-Shirt Teslo',
    description: 'Product Title',
    uniqueItems: true,
  })
  @Column('text', {
    unique: true,
  })
  title: string;

  @ApiProperty({
    example: 0,
    description: 'Product price',
  })
  @Column('numeric', {
    precision: 10,
    scale: 2,
    default: 0,
    transformer: {
      to: (value: number) => value,
      from: (value: string) => parseFloat(value),
    },
  })
  price: number;

  @ApiProperty({
    example: 'Anim reprehenderit nulla in anim mollit minim irure commodo.',
    description: 'Product description',
    default: null,
  })
  @Column({
    type: 'text',
    nullable: true,
  })
  description: string;

  @ApiProperty({
    example: 't_shirt_teslo',
    description: 'Product SLUG - for SEO',
    uniqueItems: true,
  })
  @Column('text', {
    unique: true,
  })
  slug: string;

  @ApiProperty({
    example: 10,
    description: 'Product stock',
    default: 0,
  })
  @Column('int', {
    default: 0,
  })
  stock: number;

  @ApiProperty({
    example: ['M', 'XL', 'XXL'],
    description: 'Product sizes',
    isArray: true,
  })
  @Column('text', {
    array: true,
  })
  sizes: string[];

  @ApiProperty({
    example: 'women',
    description: 'Product gender',
  })
  @Column('text', {
    array: true,
    default: [],
  })
  gender: string[];

  @ApiProperty()
  @Column('text', {
    array: true,
    default: [],
  })
  tags: string[];

  @ApiProperty({
    type: () => ProductImage,
    isArray: true,
    description: 'Product images',
  })
  @OneToMany(() => ProductImage, (productImage) => productImage.product, {
    cascade: true,
    eager: true,
  })
  images?: ProductImage[];

  @ApiProperty()
  @OneToMany(() => Review, (review) => review.product, { cascade: true })
  reviews: Review[];

  @ApiProperty()
  @OneToMany(() => OrderItem, (orderItem) => orderItem.product)
  orderItems: OrderItem[];

  @ApiProperty({
    type: () => User,
    description: 'User who created the product',
  })
  @ManyToOne(() => User, (user) => user.product, { eager: true })
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ApiProperty({
    type: () => Category,
    description: 'Category assigned to the product',
  })
  @ManyToOne(() => Category, (category) => category.products, { eager: true })
  @JoinColumn({ name: 'category_id' }) // <--- CONECTA CON LA COLUMNA category_id
  category: Category;

  @BeforeInsert()
  checkSlugInsert() {
    if (!this.slug) {
      this.slug = this.title;
    }

    this.slug = this.slug
      .toLowerCase()
      .replaceAll(' ', '_')
      .replaceAll("'", '');
  }

  @BeforeUpdate()
  checkSlugUpdate() {
    this.slug = this.slug
      .toLowerCase()
      .replaceAll(' ', '_')
      .replaceAll("'", '');
  }
}
