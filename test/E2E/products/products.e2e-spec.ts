import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from '../../../src/app.module';

describe('products (e2e)', () => {
  let app: INestApplication<App>;
  let adminToken: string;

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

    const loginResponse = await request(app.getHttpServer())
      .post('/api/auth/login')
      .send({
        email: 'aubrey9@hotmail.com',
        password: 'EJ1Z4FXPam6M',
      });

    adminToken = loginResponse.body.token;
  });

  it('/api/products (POST) - with no body ', async () => {
    const response = await request(app.getHttpServer())
      .post('/api/products')
      .set('Authorization', `Bearer ${adminToken}`);

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
      .set('Authorization', `Bearer ${adminToken}`)

      .send({
        title: 'Yoga Mat Pro Grip rtettrt-ndanfkenfkan-ncdkrskfvsr',
        price: 39.99,
        description:
          'Durable yoga mat with superior grip for all fitness levels. dbeicbeuisbsis',
        slug: 'yoga-mat-pro-grip-desfsers-kdsdnedf-dhsdkheshkf',
        stock: 175,
        sizes: ['M'],
        gender: 'unisex',
        tags: ['fitness', 'yoga', 'mat', 'exercise'],
        category: '82c32c11-ee53-4eef-85a4-5a64df4474e9',
      });

    if (response.statusCode === 500) {
      console.log('DB ERROR:', response.body.message);
    }

    expect(response.statusCode).toBe(400);
  });

  it('/api/products (GET) - get all products', async () => {
    const limit = 10;
    const offset = 0;
    const response = await request(app.getHttpServer())
      .get('/api/products')
      .query({ limit, offset });

    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBe(limit);
    const product = response.body[0];
    expect(product).toEqual(
      expect.objectContaining({
        id: expect.any(String),
        title: expect.any(String),
        price: expect.any(Number),
        slug: expect.any(String),
        tags: expect.any(Array),
        images: expect.any(Array),
        // Validamos que el objeto category tenga sus campos
        category: expect.objectContaining({
          id: expect.any(String),
          name_category: expect.any(String),
        }),
      }),
    );
  });
  it('/api/products/:term (GET) get by slu/id/title - with no body', async () => {
    const valid = '0be294dc-916f-4067-995';

    const response = await request(app.getHttpServer()).get(
      `/api/products/${valid}`,
    );

    // console.log(response.body.message);

    expect(response.statusCode).toBe(404);
    expect(response.body.message).toEqual(
      'Product with id 0be294dc-916f-4067-995 not found',
    );
  });

  it('/api/products/:term (GET) get by slug/id/title - should return 200 with body valid', async () => {
    const valid = '1a6114e7-c04f-4ea2-b168-077c31f22878';

    const response = await request(app.getHttpServer()).get(
      `/api/products/${valid}`,
    );

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual(
      expect.objectContaining({
        id: '1a6114e7-c04f-4ea2-b168-077c31f22878',
        title: 'Retro Game Cartridge Cleaning Kit',
        price: 150.56,
        description:
          'Cleaning kit designed to maintain and restore retro game cartridges.',
        slug: 'retro-game-cartridge-cleaning-kit',
        stock: 85,
        sizes: [],
        gender: ['men'],
        tags: ['retro', 'cleaning', 'gaming', 'maintenance'],
        images: [
          {
            id: '10d8b347-6111-4497-a09e-4035325e9700',
            url: 'https://picsum.photos/seed/retro-game-cartridge-cleaning-kit/600/400',
          },
          {
            id: '2a435c66-b23a-45c9-9c67-5447bb49777a',
            url: 'https://picsum.photos/seed/retro-game-cartridge-cleaning-kit-2/600/400',
          },
        ],
        user: {
          id: '9221e322-13f7-4b8c-855d-964c496d6fdc',
          email: 'superuser@google.com',
          name: 'super user',
          role: ['super-user'],
          isActive: true,
        },
        category: {
          id: '13f51e83-ab13-46c5-bf35-1a1695d98fed',
          name_category: 'Retro Gaming',
          slug: 'retro-gaming',
          description:
            'Classic gaming consoles, cartridges, and memorabilia for enthusiasts and collectors of vintage video game systems.',
        },
      }),
    );
  });

  it('api/products/:id (PATCH) should return 400 by id not valid', async () => {
    const valid = 'Car Emergency Roadside Kit';

    const response = await request(app.getHttpServer()).patch(
      `/api/products/${valid}`,
    );

    expect(response.statusCode).toBe(400);
  });

  it('/api/products/:id (PATCH) should return by id valid return 200', async () => {
    const valid = '1a6114e7-c04f-4ea2-b168-077c31f22878';

    const updateData = {
      price: 150.56,
      gender: 'men',
    };

    const response = await request(app.getHttpServer())
      .patch(`/api/products/${valid}`)
      .send(updateData);

    expect(response.statusCode).toBe(200);

    expect(response.body.price).toBe(updateData.price);
    if (Array.isArray(response.body.gender)) {
      expect(response.body.gender).toContain(updateData.gender);
    }
    expect(response.body.title).toBe('Retro Game Cartridge Cleaning Kit');
  });

  it('/api/products/:id (DELETE) with id not valid', async () => {
    const valid = 'Car Emergency Roadside Kit';

    const response = await request(app.getHttpServer())
      .delete(`/api/products/${valid}`)
      .set('Authorization', `Bearer ${adminToken}`);

    expect(response.statusCode).toBe(400);
  });

  it('/api/products/:id (DELETE) with id valid', async () => {
    const valid = '103e8076-c8f8-42b3-8c88-dfd8598edda8';

    const response = await request(app.getHttpServer())
      .delete(`/api/products/${valid}`)
      .set('Authorization', `Bearer ${adminToken}`);

    expect(response.statusCode).toBe(404);
    expect(response.body.message).toEqual(`Product with id ${valid} not found`);

    // expect(response.body.message).toEqual(`product with id ${valid} deleted`);
  });

  afterAll(async () => {
    await app.close();
  });
});
