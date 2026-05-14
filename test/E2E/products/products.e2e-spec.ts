import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from '../../../src/app.module';

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
        title: 'Yoga Mat Pro Grip rtettrt-ndanfkenfkan-ncdkrskfvsr',
        price: 39.99,
        description:
          'Durable yoga mat with superior grip for all fitness levels. dbeicbeuisbsis',
        slug: 'yoga-mat-pro-grip-desfsers-kdsdnedf-dhsdkheshkf',
        stock: 175,
        sizes: ['M'],
        gender: 'unisex',
        tags: ['fitness', 'yoga', 'mat', 'exercise'],
        category: 'a334d174-9da7-4c2d-9ff7-0308b54bac31',
      });

    if (response.statusCode === 201) {
      console.log('DB ERROR:', response.body.message); // Esto te va a decir QUÉ no encontró
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

    console.log(response.body.message);

    expect(response.statusCode).toBe(404);
    expect(response.body.message).toEqual(
      'Product with 0be294dc-916f-4067-995 not found',
    );
  });

  it('/api/products/:term (GET) get by slug/id/title - with body valid', async () => {
    const valid = '0be294dc-916f-4067-9953-ea53c51f50e1';

    const response = await request(app.getHttpServer()).get(
      `/api/products/${valid}`,
    );

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual(
      expect.objectContaining({
        id: '0be294dc-916f-4067-9953-ea53c51f50e1',
        title: 'Car Emergency Roadside Kit',
        price: expect.any(Number),
        slug: expect.any(String),
        // Cambiamos a validar un array de objetos para las imágenes
        images: expect.arrayContaining([
          expect.objectContaining({
            url: expect.stringContaining('https'),
          }),
        ]),
        // Ajustamos la estructura de category según el error
        category: expect.objectContaining({
          id: expect.any(String),
          name_category: 'Automotive',
        }),
        user: expect.objectContaining({
          email: 'burnice42@gmail.com',
        }),
      }),
    );
  });

  it('api/products/:id (PATCH)  by id not valid', async () => {
    const valid = 'Car Emergency Roadside Kit';

    const response = await request(app.getHttpServer()).patch(
      `/api/products/${valid}`,
    );

    expect(response.statusCode).toBe(400);
  });

  it('/api/products/:id (PATCH) by id valid', async () => {
    const valid = '0be294dc-916f-4067-9953-ea53c51f50e1';

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
    expect(response.body.title).toBe('Car Emergency Roadside Kit');
  });

  it('/api/products/:id (DELETE) with id not valid', async () => {
    const valid = 'Car Emergency Roadside Kit';

    const response = await request(app.getHttpServer()).delete(
      `/api/products/${valid}`,
    );

    expect(response.statusCode).toBe(400);
  });

  it('/api/products/:id (DELETE) with id valid', async () => {
    const valid = '103e8076-c8f8-42b3-8c88-dfd8598edda8';

    const response = await request(app.getHttpServer()).delete(
      `/api/products/${valid}`,
    );

    expect(response.statusCode).toBe(200);
    expect(response.body.message).toEqual(`product with id ${valid} deleted`);
  });

  afterAll(async () => {
    await app.close(); // <--- Esto cierra las conexiones a la DB y mata los procesos de Nest
  });
});
