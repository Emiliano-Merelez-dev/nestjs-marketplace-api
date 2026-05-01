import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { initialData } from './data/seed.data';
import { Product } from '../products/entities/product.entity'; // Ajustá según tus carpetas
import { Category } from 'src/categories/entities/category.entity';
import { User } from 'src/auth/entities/user.entity';
import { ProductImage } from 'src/products/entities/product-image.entity';
import { Order } from 'src/orders/entities/order.entity';
import { OrderItem } from 'src/orders/entities/order-item.entity';

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
  ) {}

  async runSeed() {
    // 1. Limpieza total
    await this.deleteTables();

    // 2. Inserción de Usuarios
    const users = await this.insertUsers();
    const adminUser = users[0]; // Usamos el primer usuario como dueño por defecto

    // 3. Inserción de Categorías
    const categories = await this.insertCategories();

    // 4. Inserción de Productos
    await this.insertProducts(adminUser, categories);

    return 'SEED EXECUTED SUCCESSFULLY';
  }

  private async deleteTables() {
    // 1. Borramos lo más profundo (los que no tienen hijos)
    // IMPORTANTE: Primero OrderItems porque depende de Orders y de Products
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

    // 2. Ahora sí, las reviews e imágenes (que dependen de productos)
    // await this.reviewRepository.createQueryBuilder().delete().where({}).execute();
    await this.productImageRepository
      .createQueryBuilder()
      .delete()
      .where({})
      .execute();

    // 3. Borramos los productos
    await this.productRepository
      .createQueryBuilder()
      .delete()
      .where({})
      .execute();

    // 4. Los padres finales
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

    await this.productRepository.save(productsToInsert);
  }
}
