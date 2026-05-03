import type { Order } from 'src/orders/entities/order.entity';
import type { Product } from 'src/products/entities/product.entity';
import { Order as OrderEntity } from 'src/orders/entities/order.entity';
import { Product as ProductEntity } from 'src/products/entities/product.entity';
import { Review } from 'src/reviews/entities/review.entity';
import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('users')
export class User {
  @ApiProperty({
    example: 'f5b3a1e2-6c54-4b01-90e6-d701748f0851',
    description: 'Unique User ID',
    uniqueItems: true,
  })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({
    example: 'otismarks@google.com',
    description: 'User email address',
    uniqueItems: true,
  })
  @Column('text', {
    unique: true,
  })
  email: string;

  @Column('text', {
    select: false,
  })
  password: string;

  @ApiProperty({
    example: 'Otis Marks',
    description: 'Full name of the user',
  })
  @Column('text')
  name: string;

  @ApiProperty({
    example: ['user', 'admin'],
    description: 'User roles/permissions',
    default: ['user'],
  })
  @Column('text', {
    array: true,
    default: ['user'],
  })
  role: string[];

  @ApiProperty({
    example: true,
    description: 'Is the user account active?',
  })
  @Column('bool', {
    default: true,
  })
  isActive: boolean;

  @ApiProperty({ type: () => ProductEntity, isArray: true })
  @OneToMany(() => ProductEntity, (product) => product.user)
  product: Product;

  @ApiProperty({ type: () => Review, isArray: true })
  @OneToMany(() => Review, (review) => review.user, { cascade: true })
  reviews: Review[];

  @ApiProperty({ type: () => OrderEntity, isArray: true })
  @OneToMany(() => OrderEntity, (order) => order.user)
  orders: Order;

  @BeforeInsert()
  checkFieldsBeforeInsert() {
    this.email = this.email.toLowerCase().trim();
  }

  @BeforeUpdate()
  checkFieldsBeforeUpdate() {
    this.checkFieldsBeforeInsert();
  }
}
