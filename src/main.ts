import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1');

  /* Swagger Setup */
  const options = new DocumentBuilder()
    .setTitle('HyproDoc - API')
    .setDescription('REST client documentation for HyproDoc Platform')
    .setVersion('1.0')
    .addTag('hyprodoc')
    .setSchemes('http', 'https')
    .setBasePath('api/v1')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api/v1/docs', app, document);
  /* End of Swagger Setup */

  app.enableCors();

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
