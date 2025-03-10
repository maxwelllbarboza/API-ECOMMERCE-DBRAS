import { ValidationPipe, VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as process from 'process';
import * as dotenv from 'dotenv';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

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

  // swagger config
  if (env !== 'production') {
    const config = new DocumentBuilder()
      .addBearerAuth()
      .setTitle('Clean Architecture Nestjs')
      .setDescription('Example with todo list')
      .setVersion('1')
      .build();
    const document = SwaggerModule.createDocument(app, config, {
      // extraModels: [ResponseFormat],
      deepScanRoutes: true,
    });
    SwaggerModule.setup('api', app, document);
  }
  
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
