import { NestFactory } from '@nestjs/core';
import { Logger, ValidationPipe } from '@nestjs/common';
import { HttpResponseInterceptor, HttpExceptionFilter } from '@common/http';
import compression from 'compression';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';

import { graphqlUploadExpress } from 'graphql-upload-minimal';
import { AppModule } from './app.module';
import { SwaggerConfig } from '@config';
import helmet from 'helmet';

const bootstrap = async () => {
  let app;
  if (process.env.API_DEBUG == 'true') {
    app = await NestFactory.create(AppModule);
  } else {
    app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter());
  }

  app.use(helmet());
  app.use(compression());
  app.enableCors();
  app.enableVersioning();
  app.use(graphqlUploadExpress({ maxFileSize: 20000000, maxFiles: 10 }));
  // app.useGlobalFilters(new HttpExceptionFilter());
  // app.useGlobalInterceptors(new HttpResponseInterceptor());
  app.useGlobalPipes(new ValidationPipe());

  app.setGlobalPrefix(AppModule.apiPrefix);
  SwaggerConfig(app, AppModule.apiVersion);
  await app.listen(AppModule.port);
  return AppModule.port;
};

bootstrap().then((port: number) => {
  Logger.log(`Application running on port: ${port}`, 'Main');
});
