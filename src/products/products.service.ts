import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { User } from 'src/auth/entities/user.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,

    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findAll() {
    return this.productRepository.find({});
  }

  async create(createProuductDto: CreateProductDto) {
    try {
      const user = await this.userRepository.findOneBy({
        id: 'ea5ef178-41ce-4147-ae2c-c891497d8830',
      });
      const product = this.productRepository.create({
        ...this.formatProductData(createProuductDto),
        user: user,
      });

      await this.productRepository.save(product);
      return product;
    } catch (error) {
      this.handleDBExceptions(error);
      throw new InternalServerErrorException(
        'error in the server, review logs',
      );
    }
  }

  private handleDBExceptions(error: any) {
    if (error.code === '23505') throw new BadRequestException(error.detail);
  }

  private formatProductData(dto: CreateProductDto | UpdateProductDto) {
    const { gender, category, ...details } = dto;

    return {
      ...details,
      // Solo mapeamos si el valor existe (útil para el UpdateDto)
      ...(gender && { gender: Array.isArray(gender) ? gender : [gender] }),
      ...(category && { category: { id: category } }),
    };
  }
}
