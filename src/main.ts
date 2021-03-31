import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {n8configs} from '@djorellanab/n8-configuration'
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  
  const config = new DocumentBuilder()
    .setTitle('Api Documention')
    .setDescription('This is the api documentation that was created on the test')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  
  SwaggerModule.setup('documentation', app, document);
  
  await app.listen(n8configs.apiConfig.port);
}
bootstrap();
