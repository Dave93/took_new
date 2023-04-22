import { INestApplication, Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  // constructor() {
  //   super({
  //     log: [
  //       {
  //         emit: 'event',
  //         level: 'query',
  //       },
  //       {
  //         emit: 'event',
  //         level: 'error',
  //       },
  //       {
  //         emit: 'stdout',
  //         level: 'info',
  //       },
  //       {
  //         emit: 'stdout',
  //         level: 'warn',
  //       },
  //     ],
  //   });
  // }
  async onModuleInit() {
    this.$use(async (params, next) => {
      // Check incoming query type
      // console.log('params:', params);
      // console.log(this);
      return next(params);
    });
    // @ts-ignore
    // this.$on('query', (e) => {
    //   // @ts-ignore
    //   if (e.query.includes('"orders"."courier_id" IS NULL')) {
    //     console.log('query:', e);
    //   }
    // });
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }

  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }
}
