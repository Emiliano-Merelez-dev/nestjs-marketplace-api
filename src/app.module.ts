import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './products/products.module';
import { AuthModule } from './auth/auth.module';
import { CategoriesModule } from './categories/categories.module';
import { ReviewsModule } from './reviews/reviews.module';
import { OrdersModule } from './orders/orders.module';
import { PaymentsModule } from './payments/payments.module';
import { SeedModule } from './seed/seed.module';

@Module({
  imports: [
    ConfigModule.forRoot(),

    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      host: process.env.DATABASE_URL ? undefined : process.env.DB_HOST,
      port: process.env.DATABASE_URL
        ? undefined
        : process.env.DB_PORT
          ? +process.env.DB_PORT
          : 5432,
      username: process.env.DATABASE_URL ? undefined : process.env.DB_USERNAME,
      password: process.env.DATABASE_URL ? undefined : process.env.DB_PASSWORD,
      database: process.env.DATABASE_URL ? undefined : process.env.DB_NAME,
      autoLoadEntities: true,
      synchronize: true,
      ssl: process.env.DATABASE_URL ? { rejectUnauthorized: false } : false,
      extra: {
        family: 4,
      },
    }),

    ProductsModule,
    AuthModule,

    AuthModule,

    CategoriesModule,

    ReviewsModule,

    OrdersModule,

    PaymentsModule,

    SeedModule,
  ],
})
export class AppModule {}
