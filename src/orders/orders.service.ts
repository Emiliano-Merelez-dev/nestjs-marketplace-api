import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Order, OrderItem } from './entities';
import { In, Repository } from 'typeorm';
import { Product } from 'src/products/entities';
import { DataSource } from 'typeorm';
import { CreateOrderDto } from './dto/create-order.dto';
import { User } from 'src/auth/entities/user.entity';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,

    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,

    private readonly dataSource: DataSource,
  ) {}

  async create(createOrderDto: CreateOrderDto, user: User) {
    const { items } = createOrderDto;

    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      const productIds = items.map((item) => item.productId);
      const dbProducts = await this.productRepository.findBy({
        id: In(productIds),
      });

      let total = 0;

      const orderItems = items.map((itemDto) => {
        const product = dbProducts.find((p) => p.id === itemDto.productId);

        if (!product)
          throw new NotFoundException(
            `product with id ${itemDto.productId} not found`,
          );

        if (product.stock < itemDto.quantity) {
          throw new BadRequestException(
            `There isn't enough stock of this item ${product.title}`,
          );
        }

        total += product.price * itemDto.quantity;

        product.stock -= itemDto.quantity;

        return queryRunner.manager.create(OrderItem, {
          quantity: itemDto.quantity,
          price: product.price,
          size: itemDto.size,
          product: product,
        });
      });

      const order = queryRunner.manager.create(Order, {
        user,
        total,
        orderItems,
      });

      await queryRunner.manager.save(order);

      await queryRunner.manager.save(dbProducts);

      await queryRunner.commitTransaction();

      return order;
    } catch (error) {
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      await queryRunner.release();
    }
  }

  findAll() {
    return this.orderRepository.find({
      relations: ['user', 'orderItems', 'orderItems.product'],
    });
  }
}
