import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { initialData } from './data/seed.data';
import { Product } from '../products/entities/product.entity';
import { Category } from 'src/categories/entities/category.entity';
import { User } from 'src/auth/entities/user.entity';
import { ProductImage } from 'src/products/entities/product-image.entity';
import { Order } from 'src/orders/entities/order.entity';
import { OrderItem } from 'src/orders/entities/order-item.entity';
import { Review } from 'src/reviews/entities/review.entity';

@Injectable()
export class SeedService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,

    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,

    @InjectRepository(User)
    private readonly userRepository: Repository<User>,

    @InjectRepository(ProductImage)
    private readonly productImageRepository: Repository<ProductImage>,

    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,

    @InjectRepository(OrderItem)
    private readonly orderItemRepository: Repository<OrderItem>,

    @InjectRepository(Review)
    private readonly reviewRepository: Repository<Review>,
  ) {}

  async runSeed() {
    await this.deleteTables();

    const users = await this.insertUsers();
    const adminUser = users[0];

    const categories = await this.insertCategories();

    const dbProducts = await this.insertProducts(adminUser, categories);

    await this.insertReviews(users, dbProducts);

    return 'SEED EXECUTED SUCCESSFULLY';
  }

  private async deleteTables() {
    await this.orderItemRepository
      .createQueryBuilder()
      .delete()
      .where({})
      .execute();
    await this.orderRepository
      .createQueryBuilder()
      .delete()
      .where({})
      .execute();

    await this.reviewRepository
      .createQueryBuilder()
      .delete()
      .where({})
      .execute();

    await this.productImageRepository
      .createQueryBuilder()
      .delete()
      .where({})
      .execute();

    await this.productRepository
      .createQueryBuilder()
      .delete()
      .where({})
      .execute();

    await this.categoryRepository
      .createQueryBuilder()
      .delete()
      .where({})
      .execute();
    await this.userRepository.createQueryBuilder().delete().where({}).execute();
  }

  private async insertUsers() {
    const seedUsers = initialData.users;

    const users: User[] = [];

    seedUsers.forEach((user) => {
      users.push(this.userRepository.create(user));
    });

    const dbUsers = await this.userRepository.save(users);

    return dbUsers;
  }

  private async insertCategories() {
    const seedCategories = initialData.categories;
    const categoriesToInsert = seedCategories.map((cat) =>
      this.categoryRepository.create(cat),
    );
    return await this.categoryRepository.save(categoriesToInsert);
  }

  private async insertProducts(user: User, categories: Category[]) {
    const seedProducts = initialData.products;

    const productsToInsert = seedProducts.map((seedProduct) => {
      const category = categories.find((c) => c.slug === seedProduct.category);

      const { images = [], ...productDetails } = seedProduct;

      return this.productRepository.create({
        ...productDetails,
        images: images.map((url) =>
          this.productImageRepository.create({ url }),
        ),
        user: user,
        category: category,
      });
    });

    return await this.productRepository.save(productsToInsert);
  }

  private async insertReviews(users: User[], products: Product[]) {
    const reviewsInsert = initialData.reviews.map((seedReview) => {
      const randomUser = users[Math.floor(Math.random() * users.length)];
      const randomProduct =
        products[Math.floor(Math.random() * products.length)];

      // Creamos la instancia de la Review vinculando las instancias completas (TypeORM extrae el ID solo)
      return this.reviewRepository.create({
        rating: seedReview.rating,
        comment: seedReview.comment,
        createdAt: seedReview.created_at,
        user: randomUser, // 👈 Relación ManyToOne
        product: randomProduct, // 👈 Relación ManyToOne
      });
      // Guardamos las 50 reviews de un solo saque en la base de datos
    });
    await this.reviewRepository.save(reviewsInsert);
  }
}
