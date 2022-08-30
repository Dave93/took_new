import { Module, Global, CacheModule } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { EnvironmentModule } from '@nestjs-steroids/environment';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloErrorConverter, extendMapItem, mapItemBases } from 'apollo-error-converter';
import { join } from 'path';
import { Logger } from '@nestjs/common/services/logger.service';
import { MercuriusDriver, MercuriusDriverConfig } from '@nestjs/mercurius';
import { AuthModule } from './modules/auth/auth.module';
import { PrismaService } from './prisma.service';
import { PermissionsModule } from './modules/permissions/permissions.module';
import { RolesModule } from '@modules/roles/roles.module';
import { RolesPermissionsModule } from './modules/roles_permissions/roles_permissions.module';
import { DeliveryPricingModule } from './modules/delivery_pricing/delivery_pricing.module';
import { OrganizationsModule } from './modules/organizations/organizations.module';
import { WorkSchedulesModule } from './modules/work_schedules/work_schedules.module';
import { CacheControlModule } from './modules/cache_control/cache_control.module';
import { TerminalsModule } from './modules/terminals/terminals.module';
import { ScheduleModule } from '@nestjs/schedule';
import { UsersModule } from './modules/users/users.module';
import { LinkRecordsModule } from './modules/link_records/link_records.module';
import { WorkScheduleEntriesModule } from './modules/work_schedule_entries/work_schedule_entries.module';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env'],
    }),
    ScheduleModule.forRoot(),
    // DatabaseModule,
    // AdminModule,
    // AuthModule,
    // OtpModule,

    // GraphQLModule.forRoot<MercuriusDriverConfig>({
    //   driver: MercuriusDriver,
    //   autoSchemaFile: '~schema.gql',
    // }),
    CacheModule.register(),
    RolesModule,
    RolesPermissionsModule,
    PermissionsModule,
    AuthModule,
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: '~schema.gql',
    }),
    DeliveryPricingModule,
    OrganizationsModule,
    WorkSchedulesModule,
    TerminalsModule,
    CacheControlModule,
    UsersModule,
    LinkRecordsModule,
    WorkScheduleEntriesModule,
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
