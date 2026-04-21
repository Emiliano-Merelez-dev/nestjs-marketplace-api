import type { Product } from 'src/products/entities/product.entity';
import { Product as ProductEntity } from 'src/products/entities/product.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import type { Order } from './order.entity';
import { Order as OrderEntity } from './order.entity';
@Entity({ name: 'order_items' })
export class OrderItem {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('int')
  quantity: number;

  @Column('float')
  price: number;

  @ManyToOne(() => OrderEntity, (order) => order.orderItems, {
    onDelete: 'CASCADE',
  })
  order: Order;

  @ManyToOne(() => ProductEntity, (product) => product.orderItems, {
    eager: true,
  })
  product: Product;
}
