import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {n8configs} from '@djorellanab/n8-configuration'
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  
  const config = new DocumentBuilder()
    .setTitle('Api example')
    .setDescription('The N8 API description')
    .setVersion('1.0')
    .addTag('n8')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  
  SwaggerModule.setup('api', app, document);
  
  await app.listen(n8configs.apiConfig.port);
}
bootstrap();
