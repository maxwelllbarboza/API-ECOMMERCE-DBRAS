import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';


async function bootstrap() { 

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

  // app.enableVersioning({
  //   defaultVersion: '1',
  //   type: VersioningType.URI,
  // });

  //swagger config
  const config = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('Clean Architecture com Nestjs')
    .setDescription('API de Ecommerce da DBRAS')    
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);
  const port = process.env.PORT || 
  
  await app.listen( ?? 3000);
}
bootstrap();
