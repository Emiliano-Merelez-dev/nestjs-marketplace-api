import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { User } from 'src/auth/entities/user.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { validate as isUuid } from 'uuid';
import { ProductImage } from './entities/product-image.entity';

@Injectable()
export class ProductsService {
  private readonly logger = new Logger('ProductService');

  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,

    @InjectRepository(User)
    private readonly userRepository: Repository<User>,

    @InjectRepository(ProductImage)
    private readonly productImageRepository: Repository<ProductImage>,
  ) {}

  async findAll() {
    try {
      const products = await this.productRepository.find({});
      return products;
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  async create(createProuductDto: CreateProductDto) {
    try {
      const user = await this.userRepository.findOneBy({
        id: '2478857b-6b9c-4b4d-8db7-a3d14cbc68e8',
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

  async findOne(term: string) {
    let product: Product;

    if (isUuid(term)) {
      product = await this.productRepository.findOneBy({ id: term });
    } else {
      const queryBuilder = this.productRepository.createQueryBuilder('prod');
      product = await queryBuilder
        .where('UPPER(prod.title) = :title or prod.slug = :slug', {
          title: term.toUpperCase(),
          slug: term.toLowerCase(),
        })
        .getOne();
    }

    if (!product) throw new NotFoundException(`Product with ${term} not found`);

    return product;
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    const product = await this.productRepository.preload({
      id: id,
      ...this.formatProductData(updateProductDto),
    });

    if (!product)
      throw new NotFoundException(`product with id: ${id} not found`);

    try {
      await this.productRepository.save(product);
      return product;
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  async remove(id: string) {
    const product = await this.findOne(id);
    await this.productRepository.remove(product);
    return {
      message: `product with id ${id} deleted`,
    };
  }

  private handleDBExceptions(error: any) {
    if (error.code === '23505') throw new BadRequestException(error.detail);

    this.logger.error(error);
    throw new InternalServerErrorException(
      'Unexpected error, check server logs',
    );
  }

  private formatProductData(dto: CreateProductDto | UpdateProductDto) {
    const { gender, category, images, ...details } = dto;

    return {
      ...details,

      ...(gender && { gender: Array.isArray(gender) ? gender : [gender] }),

      ...(category && { category: { id: category } }),

      ...(images && {
        images: images.map((url) =>
          this.productImageRepository.create({ url }),
        ),
      }),
    };
  }
}
