import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as process from 'process';
import * as dotenv from 'dotenv';

dotenv.config();  


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //pipes
  app.useGlobalPipes(new ValidationPipe({
    transform: true, 
    whitelist: true, 
    forbidNonWhitelisted: true, 
  }));  
  
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
