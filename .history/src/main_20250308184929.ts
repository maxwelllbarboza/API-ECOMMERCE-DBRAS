import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({
    transform: true, // Habilita transformação de objetos
    whitelist: true, // Limita apenas as propriedades do DTO
    forbidNonWhitelisted: true, // Lança erro se houver propriedades não permitidas
  }));
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
