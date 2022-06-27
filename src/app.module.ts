import { Module, Global } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { EnvironmentModule } from '@nestjs-steroids/environment';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloErrorConverter, extendMapItem, mapItemBases } from 'apollo-error-converter';
import { join } from 'path';
import { Logger } from '@nestjs/common/services/logger.service';
import { AuthModule } from './auth/auth.module';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env'],
    }),
    // DatabaseModule,
    AuthModule,
    // AdminModule,
    // AuthModule,
    // OtpModule,
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      installSubscriptionHandlers: true,
      autoSchemaFile: '~schema.gql',
    }),
  ],
})
export class AppModule {
  static port: number;
  static apiVersion: string;
  static apiPrefix: string;

  constructor(private readonly configService: ConfigService) {
    AppModule.port = +this.configService.get('API_PORT');
    AppModule.apiVersion = this.configService.get('API_VERSION');
    AppModule.apiPrefix = this.configService.get('API_PREFIX');
  }
}
