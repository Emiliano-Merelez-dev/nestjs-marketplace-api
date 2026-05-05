import type { User } from 'src/auth/entities/user.entity';
import type { Product } from 'src/products/entities/product.entity';
import { User as UserEntity } from 'src/auth/entities/user.entity';
import { Product as ProductEntity } from 'src/products/entities/product.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'reviews' })
export class Review {
  @ApiProperty({
    example: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
    description: 'Review ID',
    uniqueItems: true,
  })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({
    example: 4.5,
    description: 'Product rating score',
    default: 0,
  })
  @Column('float', {
    default: 0,
  })
  rating: number;

  @ApiProperty({
    example: 'This product exceeded my expectations, very high quality.',
    description: 'User feedback comment',
  })
  @Column('text')
  comment: string;

  @ApiProperty({
    example: '2026-04-28T18:00:00Z',
    description: 'Creation date',
  })
  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @ApiProperty({ type: () => UserEntity })
  @ManyToOne(() => UserEntity, (user) => user.reviews, { nullable: false })
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ApiProperty({ type: () => ProductEntity })
  @ManyToOne(() => ProductEntity, (product) => product.reviews, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'product_id' })
  product: Product;
}
