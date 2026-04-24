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

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text', {
    unique: true,
  })
  email: string;

  @Column('text', {
    select: false,
  })
  password: string;

  @Column('text')
  name: string;

  @Column('text', {
    array: true,
    default: ['user'],
  })
  role: string[];

  @Column('bool', {
    default: true,
  })
  isActive: boolean;

  @OneToMany(() => ProductEntity, (product) => product.user)
  product: Product;

  @OneToMany(() => Review, (review) => review.user, { cascade: true })
  reviews: Review[];

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
