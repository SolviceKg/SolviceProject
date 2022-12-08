import dotenv = require('dotenv');
dotenv.config();
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  // await app.listen(process.env.PORT || 4000);
  const config = new DocumentBuilder()
    .setTitle(' example')
    .setDescription('API description')
    .setVersion('1.0')
    .addTag('solvice')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(4000);
}
bootstrap();