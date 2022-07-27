import { Module, Global } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { EnvironmentModule } from '@nestjs-steroids/environment';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloErrorConverter, extendMapItem, mapItemBases } from 'apollo-error-converter';
import { join } from 'path';
import { Logger } from '@nestjs/common/services/logger.service';
import { MercuriusDriver, MercuriusDriverConfig } from '@nestjs/mercurius';
import { AuthModule } from './auth/auth.module';
import { PrismaService } from './prisma.service';

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

    // GraphQLModule.forRoot<MercuriusDriverConfig>({
    //   driver: MercuriusDriver,
    //   autoSchemaFile: '~schema.gql',
    // }),
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: '~schema.gql',
    }),
  ],
  providers: [PrismaService],
})
export class AppModule {
  static port: number;
  static apiVersion: string;
  static apiPrefix: string;
  static isDevMode: boolean;

  constructor(private readonly configService: ConfigService) {
    AppModule.port = +this.configService.get('API_PORT');
    AppModule.apiVersion = this.configService.get('API_VERSION');
    AppModule.apiPrefix = this.configService.get('API_PREFIX');
    AppModule.isDevMode = this.configService.get('API_DEBUG') === 'true';
  }
}
