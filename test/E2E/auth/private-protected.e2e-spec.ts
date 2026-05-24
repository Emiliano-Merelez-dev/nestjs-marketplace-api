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
          id: 'd990d588-e92e-4aec-be23-a664fcf9714e',
          total: 199.89999999999998,
          status: 'pending',
          createdAt: '2026-05-22T04:00:44.009Z',
          isPaid: false,
          paidAt: null,
          transactionId: null,
          orderItems: [
            {
              id: 'f53f6be4-4fdc-4a8b-b2b9-6e43f4cf9bc9',
              quantity: 10,
              price: 19.99,
              product: {
                id: '0cec2f2c-52f7-4d41-8fdb-505bb9b9da31',
                title: 'Retro Game Cartridge Cleaning Kit',
                price: 19.99,
                description:
                  'Cleaning kit designed to maintain and restore retro game cartridges.',
                slug: 'retro-game-cartridge-cleaning-kit',
                stock: 75,
                sizes: [],
                gender: ['unisex'],
                tags: ['retro', 'cleaning', 'gaming', 'maintenance'],
                images: [
                  {
                    id: 'cadacbd1-55f9-45f8-acb4-1398a34b82f9',
                    url: 'https://picsum.photos/seed/retro-game-cartridge-cleaning-kit/600/400',
                  },
                  {
                    id: 'dea26835-c0f6-4802-8da7-978f80ddc953',
                    url: 'https://picsum.photos/seed/retro-game-cartridge-cleaning-kit-2/600/400',
                  },
                ],
                user: {
                  id: 'e2aae439-18d2-4f98-8bca-6e1fbf5ad759',
                  email: 'superuser@google.com',
                  name: 'super user',
                  role: ['super-user'],
                  isActive: true,
                },
                category: {
                  id: '3f0a6a8d-50aa-4b9f-b2a8-3cf7fb0d97d6',
                  name_category: 'Retro Gaming',
                  slug: 'retro-gaming',
                  description:
                    'Classic gaming consoles, cartridges, and memorabilia for enthusiasts and collectors of vintage video game systems.',
                },
              },
            },
          ],
          user: {
            id: '1cd5d7cc-80b2-4508-8725-3d4e04c74884',
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
          id: 'd990d588-e92e-4aec-be23-a664fcf9714e',
          total: 199.89999999999998,
          status: 'pending',
          createdAt: '2026-05-22T04:00:44.009Z',
          isPaid: false,
          paidAt: null,
          transactionId: null,
          user: {
            id: '1cd5d7cc-80b2-4508-8725-3d4e04c74884',
            email: 'emilianodarte@google.com',
            name: 'emi glory',
            role: ['user'],
            isActive: true,
          },
          orderItems: [
            {
              id: 'f53f6be4-4fdc-4a8b-b2b9-6e43f4cf9bc9',
              quantity: 10,
              price: 19.99,
              product: {
                id: '0cec2f2c-52f7-4d41-8fdb-505bb9b9da31',
                title: 'Retro Game Cartridge Cleaning Kit',
                price: 19.99,
                description:
                  'Cleaning kit designed to maintain and restore retro game cartridges.',
                slug: 'retro-game-cartridge-cleaning-kit',
                stock: 75,
                sizes: [],
                gender: ['unisex'],
                tags: ['retro', 'cleaning', 'gaming', 'maintenance'],
                images: [
                  {
                    id: 'cadacbd1-55f9-45f8-acb4-1398a34b82f9',
                    url: 'https://picsum.photos/seed/retro-game-cartridge-cleaning-kit/600/400',
                  },
                  {
                    id: 'dea26835-c0f6-4802-8da7-978f80ddc953',
                    url: 'https://picsum.photos/seed/retro-game-cartridge-cleaning-kit-2/600/400',
                  },
                ],
                user: {
                  id: 'e2aae439-18d2-4f98-8bca-6e1fbf5ad759',
                  email: 'superuser@google.com',
                  name: 'super user',
                  role: ['super-user'],
                  isActive: true,
                },
                category: {
                  id: '3f0a6a8d-50aa-4b9f-b2a8-3cf7fb0d97d6',
                  name_category: 'Retro Gaming',
                  slug: 'retro-gaming',
                  description:
                    'Classic gaming consoles, cartridges, and memorabilia for enthusiasts and collectors of vintage video game systems.',
                },
              },
            },
          ],
        },
      ],
    });
  });
});
