import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';
import { OrderItem } from './entities/order-item.entity';
import { In, Repository } from 'typeorm';
import { Product } from 'src/products/entities/product.entity';
import { DataSource } from 'typeorm';
import { CreateOrderDto } from './dto/create-order.dto';
import { User } from 'src/auth/entities/user.entity';
import { UpdateOrderDto } from './dto/update-order.dto';
import { OrderStatus } from './entities/order-status.enum';
import { PaginationDto } from 'src/common/dtos/pagination.dto';

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
        user: { id: user.id },
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

  async findAll(paginationDto: PaginationDto) {
    const { limit = 10, offset = 0 } = paginationDto;

    const [orders, total] = await this.orderRepository.findAndCount({
      take: limit,
      skip: offset,
      relations: ['user', 'orderItems', 'orderItems.product'],
      order: {
        createdAt: 'DESC',
      },
    });

    return {
      total,
      orders,
    };
  }

  async findAllByUser(user: User, paginationDto: PaginationDto) {
    const { limit = 4, offset = 0 } = paginationDto;

    const [orders, total] = await this.orderRepository.findAndCount({
      where: {
        user: { id: user.id },
      },
      take: limit,
      skip: offset,
      relations: [
        'orderItems',
        'orderItems.product',
        'orderItems.product.images',
        'user',
      ],
      order: {
        createdAt: 'DESC',
      },
    });

    return {
      total,
      orders,
    };
  }

  async findOne(id: string, user: User) {
    const order = await this.orderRepository.findOne({
      where: { id },
      relations: ['user', 'orderItems', 'orderItems.product'],
    });

    if (!order) throw new NotFoundException(`Order with id ${id} not found`);

    const isAdmin = user.role.includes('admin');
    const isOwner = order.user.id === user.id;

    if (!isOwner && !isAdmin) {
      throw new ForbiddenException(
        'You do not have permission to view this order',
      );
    }

    return order;
  }

  async update(id: string, updateOrderDto: UpdateOrderDto, user: User) {
    const order = await this.findOne(id, user);

    const { status } = updateOrderDto;

    if (
      status === OrderStatus.CANCELED &&
      order.status !== OrderStatus.CANCELED
    ) {
      const queryRunner = this.dataSource.createQueryRunner();
      await queryRunner.connect();
      await queryRunner.startTransaction();

      try {
        for (const item of order.orderItems) {
          const product = item.product;
          product.stock += item.quantity;
          await queryRunner.manager.save(product);
        }

        order.status = OrderStatus.CANCELED;
        await queryRunner.manager.save(order);

        await queryRunner.commitTransaction();
        return order;
      } catch (error) {
        await queryRunner.rollbackTransaction();
        console.log(error);
        throw new BadRequestException('The stock could not be retrieved');
      } finally {
        queryRunner.release();
      }
    }

    const updateOrder = await this.orderRepository.preload({
      id: order.id,
      ...updateOrderDto,
    });
    return await this.orderRepository.save(updateOrder);
  }

  async remove(id: string, user: User) {
    const order = await this.findOne(id, user);

    await this.orderRepository.remove(order);
    return { messages: `Order with id ${id} deleted successfully` };
  }
}
