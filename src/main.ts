import * as helmet from 'helmet';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { AppConfigService } from './config/config.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config: AppConfigService = app.get(AppConfigService);

  app.setGlobalPrefix('api');

  const options = new DocumentBuilder()
    .setTitle('GESTIES')
    .setDescription('GESTIES API endpoints')
    .setVersion('1.0')
    .addBearerAuth()
    .addTag('Gesties')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('swagger', app, document);

  if (config.mode === 'production') {
    app.use(helmet());
    app.enableCors();
  }

  await app.listen(config.port);
}

bootstrap();
