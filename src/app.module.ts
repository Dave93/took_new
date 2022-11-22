import { Module, Global, CacheModule } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { EnvironmentModule } from '@nestjs-steroids/environment';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloErrorConverter, extendMapItem, mapItemBases } from 'apollo-error-converter';
import path, { join } from 'path';
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
import { CustomersResolver } from './modules/customers/customers.resolver';
import { CustomersModule } from './modules/customers/customers.module';
import { OrderStatusModule } from './modules/order_status/order_status.module';
import { OrdersModule } from './modules/orders/orders.module';
import { OrderActionsModule } from './modules/order_actions/order_actions.module';
import { OrdersLocationsModule } from './modules/orders_locations/orders_locations.module';
import { BgJobsModule } from './modules/bg_jobs/bg_jobs.module';
import { BullModule } from '@nestjs/bull';
import * as redisStore from 'cache-manager-redis-store';
import { ElasticsearchModule } from '@nestjs/elasticsearch';
import { SearchModule } from './modules/search/search.module';
import { ApiTokensModule } from './modules/api_tokens/api_tokens.module';
import { ExternalModule } from './modules/external/external.module';
import { ConnectClientsModule } from './modules/connect_clients/connect_clients.module';
import { PubSub } from 'graphql-subscriptions';
import { PubsubModule } from './modules/pubsub/pubsub.module';
import { OrderNewNotificationsModule } from './modules/queues/order_new_notifications/order_new_notifications.module';
import { DateScalar } from './helpers/date.scalar';
import { FcmModule } from 'nestjs-fcm';
import { OrderCompleteModule } from './modules/queues/order_complete/order_complete.module';
import { OrderIndexModule } from './modules/queues/order_index/order_index.module';

@Global()
@Module({
  imports: [
    FcmModule.forRoot({
      firebaseSpecsPath: path.join(__dirname, '../src/fcm/config.json'),
    }),
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
    // subscription: true,
    // }),
    BullModule.forRoot({
      redis: {
        host: 'localhost',
        port: 6379,
      },
      prefix: 'arryt_tasks_',
    }),
    BullModule.registerQueue(
      {
        name: 'bg_jobs',
      },
      {
        name: 'new_order_notifications',
      },
      {
        name: 'order_complete_actions',
      },
      {
        name: 'order_index',
      },
    ),
    CacheModule.register({
      isGlobal: true,
      store: redisStore,
      host: '127.0.0.1',
      port: 6379,
    }),
    CacheControlModule,
    RolesModule,
    RolesPermissionsModule,
    PermissionsModule,
    AuthModule,
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: '~schema.gql',
      subscriptions: {
        'graphql-ws': true,
        path: '/ws',
      },
    }),
    DeliveryPricingModule,
    OrganizationsModule,
    WorkSchedulesModule,
    TerminalsModule,
    UsersModule,
    LinkRecordsModule,
    WorkScheduleEntriesModule,
    CustomersModule,
    OrderStatusModule,
    OrdersModule,
    OrderActionsModule,
    OrdersLocationsModule,
    BgJobsModule,
    SearchModule,
    ApiTokensModule,
    ExternalModule,
    ConnectClientsModule,
    PubsubModule,
    OrderNewNotificationsModule,
    OrderCompleteModule,
    OrderIndexModule,
  ],
  providers: [
    PrismaService,
    DateScalar,
    {
      provide: 'PUB_SUB',
      useValue: new PubSub(),
    },
  ],
  exports: [BullModule],
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
