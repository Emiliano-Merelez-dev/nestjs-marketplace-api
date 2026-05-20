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

    console.log(response.body.message);

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
          id: 'f010df09-75fc-4295-bc51-358f6de78844',
          total: 499.90000000000003,
          status: 'pending',
          createdAt: '2026-05-20T01:08:24.744Z',
          isPaid: false,
          paidAt: null,
          transactionId: null,
          orderItems: [
            {
              id: '0501d86d-f8f1-44d1-86b7-80408a5beeb8',
              quantity: 10,
              price: 49.99,
              product: {
                id: '128ad5a1-9e22-4f87-ae2b-f24121201ab1',
                title: 'Toolbox Organizer Heavy Duty',
                price: 49.99,
                description:
                  'Heavy-duty toolbox organizer for efficient storage of tools.',
                slug: 'toolbox-organizer-heavy-duty',
                stock: 100,
                sizes: [],
                gender: ['unisex'],
                tags: ['tools', 'toolbox', 'storage', 'diy'],
                images: [
                  {
                    id: '43402719-8df1-4561-932b-77857896e160',
                    url: 'https://picsum.photos/seed/toolbox-organizer-heavy-duty/600/400',
                  },
                  {
                    id: '47478499-f6fa-4714-b3cf-3d85be07d165',
                    url: 'https://picsum.photos/seed/toolbox-organizer-heavy-duty-2/600/400',
                  },
                ],
                user: {
                  id: '2a9fcece-035f-4eed-a184-0533b436e441',
                  email: 'burnice42@gmail.com',
                  name: 'Miss Tanya Lueilwitz II',
                  role: ['user'],
                  isActive: true,
                },
                category: {
                  id: '149629f9-67f2-4874-9fbe-5deb3218be19',
                  name_category: 'Tools & DIY',
                  slug: 'tools-diy',
                  description:
                    'Hand tools, power tools, and materials for construction, repairs, and do-it-yourself projects.',
                },
              },
            },
          ],
          user: {
            id: '62830d8f-06b0-4414-b8db-dace6f454fb3',
            email: 'emilianodarte@google.com',
            name: 'emi glory',
            role: ['user'],
            isActive: true,
          },
        },
      ],
    });
  });

  it('should return 403 if admin token is provided', async () => {
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
          id: 'f010df09-75fc-4295-bc51-358f6de78844',
          total: 499.90000000000003,
          status: 'pending',
          createdAt: '2026-05-20T01:08:24.744Z',
          isPaid: false,
          paidAt: null,
          transactionId: null,
          orderItems: [
            {
              id: '0501d86d-f8f1-44d1-86b7-80408a5beeb8',
              quantity: 10,
              price: 49.99,
              product: {
                id: '128ad5a1-9e22-4f87-ae2b-f24121201ab1',
                title: 'Toolbox Organizer Heavy Duty',
                price: 49.99,
                description:
                  'Heavy-duty toolbox organizer for efficient storage of tools.',
                slug: 'toolbox-organizer-heavy-duty',
                stock: 100,
                sizes: [],
                gender: ['unisex'],
                tags: ['tools', 'toolbox', 'storage', 'diy'],
                images: [
                  {
                    id: '43402719-8df1-4561-932b-77857896e160',
                    url: 'https://picsum.photos/seed/toolbox-organizer-heavy-duty/600/400',
                  },
                  {
                    id: '47478499-f6fa-4714-b3cf-3d85be07d165',
                    url: 'https://picsum.photos/seed/toolbox-organizer-heavy-duty-2/600/400',
                  },
                ],
                user: {
                  id: '2a9fcece-035f-4eed-a184-0533b436e441',
                  email: 'burnice42@gmail.com',
                  name: 'Miss Tanya Lueilwitz II',
                  role: ['user'],
                  isActive: true,
                },
                category: {
                  id: '149629f9-67f2-4874-9fbe-5deb3218be19',
                  name_category: 'Tools & DIY',
                  slug: 'tools-diy',
                  description:
                    'Hand tools, power tools, and materials for construction, repairs, and do-it-yourself projects.',
                },
              },
            },
          ],
          user: {
            id: '62830d8f-06b0-4414-b8db-dace6f454fb3',
            email: 'emilianodarte@google.com',
            name: 'emi glory',
            role: ['user'],
            isActive: true,
          },
        },
      ],
    });
  });
});
