import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

let cachedServer: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('Marketplace RESTFul API')
    .setDescription('Marketplace shop endpoints')
    .setVersion('1.0')
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        name: 'JWT',
        description: 'Enter JWT token',
        in: 'header',
      },
      'JWT-auth',
    )
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // --- ADAPTACIÓN DE ENTORNO PARA VERCEL / LOCAL ---
  if (process.env.VERCEL) {
    // Si está en Vercel, inicializa el servidor interno sin bloquear el puerto
    await app.init();
    return app.getHttpAdapter().getInstance();
  } else {
    // Si estás en tu compu local (o Docker local), corre normal como siempre
    const port = process.env.PORT || 3000;
    await app.listen(port);
    Logger.log(`App running on port ${port}`);
    return null;
  }
}

// Handler obligatorio que exportamos para que Vercel procese las peticiones serverless
export default async (req: any, res: any) => {
  if (!cachedServer) {
    cachedServer = await bootstrap();
  }
  return cachedServer(req, res);
};

// Si corremos local de forma tradicional, ejecutamos la función al arrancar el archivo
if (!process.env.VERCEL) {
  bootstrap();
}
