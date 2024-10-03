import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS with specific options :)
  app.enableCors({
    origin: ['https://studio.apollographql.com', 'http://localhost:5173', 'http://localhost:5174'], // Allow requests from Apollo Studio
    credentials: true,  // Enable sending cookies or authorization headers with requests
  });

  await app.listen(3000);
}
bootstrap();
