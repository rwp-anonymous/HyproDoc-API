import {NestFactory} from '@nestjs/core';
import {SwaggerModule, DocumentBuilder} from '@nestjs/swagger';
import {AppModule} from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  /* Swagger Setup */
  const options =
      new DocumentBuilder()
          .setTitle('HyproDoc - API')
          .setDescription('REST client documentation for HyproDoc Platform')
          .setVersion('1.0')
          .addTag('hyprodoc')
          .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
  /* End of Swagger Setup */

  await app.listen(3000);
} bootstrap();
