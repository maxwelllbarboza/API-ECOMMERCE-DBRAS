import { ValidationPipe, VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as process from 'process';
import * as dotenv from 'dotenv';

dotenv.config();  


async function bootstrap() {
  const env = process.env.NODE_ENV;
  const app = await NestFactory.create(AppModule);

  // Filter
  // app.useGlobalFilters(new AllExceptionFilter(new LoggerService()));

  //pipes
  app.useGlobalPipes(new ValidationPipe({
    transform: true, 
    whitelist: true, 
    forbidNonWhitelisted: true, 
  }));  

  // interceptors
  // app.useGlobalInterceptors(new LoggingInterceptor(new LoggerService()));
  // app.useGlobalInterceptors(new ResponseInterceptor());

  app.enableVersioning({
    defaultVersion: '1',
    type: VersioningType.URI,
  });
  
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
