import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import request from 'supertest';
import { AppModule } from '../../../src/app.module';

describe('Auth register and login (e2e)', () => {
  let app: INestApplication;

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

  it('/api/auth/register (POST) - should throw 400 if no body ', async () => {
    const response = await request(app.getHttpServer()).post(
      '/api/auth/register',
    );

    const errorMessages = [
      'email must be an email',
      'email must be a string',
      'The password must have a Uppercase, lowercase letter and a number',
      'password must be shorter than or equal to 50 characters',
      'password must be longer than or equal to 6 characters',
      'password must be a string',
      'name must be longer than or equal to 1 characters',
      'name must be a string',
    ];

    // console.log(response.body.message);
    errorMessages.forEach((message) => {
      expect(response.body.message).toContain(message);
    });
    expect(response.statusCode).toBe(400);
  });

  it('/api/auth/register (POST) - should throw 201 with body valid', async () => {
    const response = await request(app.getHttpServer())
      .post('/api/auth/register')
      .send({
        email: 'emilianodarte@google.com',
        password: 'Abc123456',
        name: 'emi glory',
      });

    // console.log(response.body.message);

    expect(response.statusCode).toBe(400);
  });

  it('/api/auth/login (POST) - should throw 400 if no body ', async () => {
    const response = await request(app.getHttpServer()).post(
      '/api/auth/register',
    );

    const errorMessages = [
      'email must be an email',
      'email must be a string',
      'The password must have a Uppercase, lowercase letter and a number',
      'password must be shorter than or equal to 50 characters',
      'password must be longer than or equal to 6 characters',
      'password must be a string',
      'name must be longer than or equal to 1 characters',
      'name must be a string',
    ];

    // console.log(response.body.message);
    errorMessages.forEach((message) => {
      expect(response.body.message).toContain(message);
    });
    expect(response.statusCode).toBe(400);
  });

  afterAll(async () => {
    await app.close();
  });
});
