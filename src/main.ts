import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Proyect example')
    .setDescription('Project description ')
    .setVersion('1.0')
    .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('docs', app, document);
    app.useGlobalPipes(new ValidationPipe({
      whitelist: true, // Solo permite los campos que estan en el DTO
      forbidNonWhitelisted: true, // Prohibe los campos no permitidos
      errorHttpStatusCode: 422
    }));

  await app.listen(3000);
}
bootstrap();
