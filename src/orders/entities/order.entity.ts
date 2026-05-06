import type { User } from 'src/auth/entities/user.entity';
import { User as UserEntity } from 'src/auth/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { OrderItem } from './order-item.entity';
import { OrderStatus } from './order-status.enum';
import { ApiProperty } from '@nestjs/swagger';
@Entity({ name: 'orders' })
export class Order {
  @ApiProperty({
    example: 'f5b3a1e2-6c54-4b01-90e6-d701748f0851',
    description: 'Unique Order ID (UUID)',
    uniqueItems: true,
  })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({
    example: 250.5,
    description: 'Total amount to pay',
  })
  @Column('float', { default: 0 })
  total: number;

  @ApiProperty({
    enum: OrderStatus,
    example: OrderStatus.PENDING,
    description: 'Current status of the order',
  })
  @Column({
    type: 'enum',
    enum: OrderStatus,
    default: OrderStatus.PENDING,
  })
  status: OrderStatus;

  @ApiProperty({
    example: '2026-04-28T19:00:00Z',
    description: 'Order creation date',
  })
  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @ApiProperty({ type: () => UserEntity })
  @ManyToOne(() => UserEntity, (user) => user.orders)
  user: User;

  @ApiProperty({
    type: () => OrderItem,
    isArray: true,
    description: 'List of products included in the order',
  })
  @OneToMany(() => OrderItem, (orderItem) => orderItem.order, { cascade: true })
  orderItems: OrderItem[];

  @ApiProperty({
    example: false,
    description: 'Indicates if the order has been paid',
  })
  @Column('bool', { default: false })
  isPaid: boolean;

  @ApiProperty({
    example: '2026-04-28T19:05:00Z',
    description: 'Date when the payment was confirmed',
    nullable: true,
  })
  @Column('timestamp', { nullable: true })
  paidAt: Date;

  @ApiProperty({
    example: '98H60553TS287434D',
    description: 'PayPal official transaction ID',
    nullable: true,
    uniqueItems: true,
  })
  @Column('text', { nullable: true, unique: true })
  transactionId?: string;
}
