import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from '../../src/app.module';

describe('products (e2e)', () => {
  let app: INestApplication<App>;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.setGlobalPrefix('api');
    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
      }),
    );

    await app.init();
  });

  it('/api/products (POST) - with no body ', async () => {
    const response = await request(app.getHttpServer()).post('/api/products');

    const mostHaveErrorMessage = [
      'title must be longer than or equal to 1 characters',
      'title must be a string',
      'sizes must be an array',
      'each value in sizes must be a string',
      'gender must be one of the following values: men, women, kid, unisex',
      'gender must be a string',
      'category must be a string',
    ];

    const messageArray: string[] = response.body.message ?? [];

    expect(response.statusCode).toBe(400);
    expect(mostHaveErrorMessage.length).toBe(messageArray.length);
    expect(messageArray).toEqual(expect.arrayContaining(mostHaveErrorMessage));
  });

  it('/api/products (POST) - with body valid', async () => {
    const response = await request(app.getHttpServer())
      .post('/api/products')
      .send({
        title: 'Yoga Mat Pro Grip rtettrt-ndanfkenfkan',
        price: 39.99,
        description:
          'Durable yoga mat with superior grip for all fitness levels. dbeicbeuisbsis',
        slug: 'yoga-mat-pro-grip-desfsers-kdsdnedf',
        stock: 175,
        sizes: ['M'],
        gender: 'unisex',
        tags: ['fitness', 'yoga', 'mat', 'exercise'],
        category: 'a334d174-9da7-4c2d-9ff7-0308b54bac31',
      });

    if (response.statusCode === 400) {
      console.log('DB ERROR:', response.body.message); // Esto te va a decir QUÉ no encontró
    }

    expect(response.statusCode).toBe(201);
  });
  afterAll(async () => {
    await app.close(); // <--- Esto cierra las conexiones a la DB y mata los procesos de Nest
  });
});
