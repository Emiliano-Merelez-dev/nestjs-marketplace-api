import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import request from 'supertest';

import { AppModule } from '../../../src/app.module';

// import { validate } from 'uuid';

describe('AuthModule Private (e2e)', () => {
  let app: INestApplication;
  let token: string;
  let adminToken: string;

  beforeAll(async () => {
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

    const loginUser = await request(app.getHttpServer())
      .post('/api/auth/login')
      .send({
        email: 'emilianodarte@google.com',
        password: 'Abc123456',
      });

    token = loginUser.body.token;

    const loginAdmin = await request(app.getHttpServer())
      .post('/api/auth/login')
      .send({
        email: 'inez_kilback70@gmail.com',
        password: 'elhbh698r8y3',
      });

    adminToken = loginAdmin.body.token;
  });

  afterAll(async () => {
    await app.close();
  });

  it('should return 401 if no token is provided', async () => {
    const response = await request(app.getHttpServer())
      .get('/api/orders')
      .send({});

    // console.log(response.body.message);

    expect(response.statusCode).toBe(401);
  });

  it('should return new token and user if token is provided', async () => {
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, 800);
    });

    const response = await request(app.getHttpServer())
      .get('/api/auth/check-status')
      .set('Authorization', `Bearer ${token}`);

    const responseToken = response.body.token;

    // console.log(response.body.message);

    expect(response.statusCode).toBe(200);
    expect(responseToken).not.toBe(token);
  });

  it('should return custom object if token is valid', async () => {
    const response = await request(app.getHttpServer())
      .get('/api/orders/user-orders')
      .set('Authorization', `Bearer ${token}`);

    expect(response.statusCode).toBe(200);
    expect(response.body).toMatchObject({
      total: 1,
      orders: [
        {
          id: '0a7c3232-8dcf-4a1e-9839-07db33483681',
          total: 799.9,
          status: 'pending',
          createdAt: expect.any(String),
          isPaid: false,
          paidAt: null,
          transactionId: null,
          orderItems: [
            {
              id: '1eb6fa3a-1e14-4495-973d-f93d24978576',
              quantity: 10,
              price: 79.99,
              product: {
                id: '10819a78-8136-4c31-85cc-12a1773bd296',
                title: 'Running Shoes Lightweight',
                price: 79.99,
                description:
                  'Lightweight running shoes designed for comfort and performance.',
                slug: 'running-shoes-lightweight',
                stock: 140,
                sizes: [],
                gender: ['men', 'women'],
                tags: ['sports', 'shoes', 'running', 'fitness'],
                images: [
                  {
                    id: 'f2779724-f6a7-4492-b856-411d82b8197c',
                    url: 'https://picsum.photos/seed/running-shoes-lightweight/600/400',
                  },
                  {
                    id: 'afd1a142-f879-4bb1-9404-35ee5ab0360e',
                    url: 'https://picsum.photos/seed/running-shoes-lightweight-2/600/400',
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
                  id: 'ab25327c-c492-4b2e-9eaf-7fb6eb3b872b',
                  name_category: 'Sports & Fitness',
                  slug: 'sports-fitness',
                  description:
                    'Equipment, apparel, and accessories to support physical activity, training, and a healthy lifestyle.',
                },
              },
            },
          ],
          user: {
            id: '3513ce40-aebb-498a-abd5-88509f873798',
            email: 'emilianodarte@google.com',
            name: 'emi glory',
            role: ['user'],
            isActive: true,
          },
        },
      ],
    });
  });

  it('should return 403 if not admin token', async () => {
    const response = await request(app.getHttpServer())
      .get('/api/orders')
      .set('Authorization', `Bearer ${token}`);

    expect(response.statusCode).toBe(403);
  });

  it('should return user if admin token is provided', async () => {
    const response = await request(app.getHttpServer())
      .get('/api/orders')
      .set('Authorization', `Bearer ${adminToken}`);

    expect(response.statusCode).toBe(200);
    expect(response.body).toMatchObject({
      total: 1,
      orders: [
        {
          id: '0a7c3232-8dcf-4a1e-9839-07db33483681',
          total: 799.9,
          status: 'pending',
          createdAt: expect.any(String),
          isPaid: false,
          paidAt: null,
          transactionId: null,
          user: {
            id: '3513ce40-aebb-498a-abd5-88509f873798',
            email: 'emilianodarte@google.com',
            name: 'emi glory',
            role: ['user'],
            isActive: true,
          },
          orderItems: [
            {
              id: '1eb6fa3a-1e14-4495-973d-f93d24978576',
              quantity: 10,
              price: 79.99,
              product: {
                id: '10819a78-8136-4c31-85cc-12a1773bd296',
                title: 'Running Shoes Lightweight',
                price: 79.99,
                description:
                  'Lightweight running shoes designed for comfort and performance.',
                slug: 'running-shoes-lightweight',
                stock: 140,
                sizes: [],
                gender: ['men', 'women'],
                tags: ['sports', 'shoes', 'running', 'fitness'],
                images: [
                  {
                    id: 'f2779724-f6a7-4492-b856-411d82b8197c',
                    url: 'https://picsum.photos/seed/running-shoes-lightweight/600/400',
                  },
                  {
                    id: 'afd1a142-f879-4bb1-9404-35ee5ab0360e',
                    url: 'https://picsum.photos/seed/running-shoes-lightweight-2/600/400',
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
                  id: 'ab25327c-c492-4b2e-9eaf-7fb6eb3b872b',
                  name_category: 'Sports & Fitness',
                  slug: 'sports-fitness',
                  description:
                    'Equipment, apparel, and accessories to support physical activity, training, and a healthy lifestyle.',
                },
              },
            },
          ],
        },
      ],
    });
  });
});
