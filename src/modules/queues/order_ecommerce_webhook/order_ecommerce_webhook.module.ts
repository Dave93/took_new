import { Module } from '@nestjs/common';
import { PrismaService } from '../../../prisma.service';
import { CacheControlService } from '@modules/cache_control/cache_control.service';
import { SearchService } from '@modules/search/search.service';
import { ConfigService } from '@nestjs/config';
import { OrderCompleteProcessor } from '@modules/queues/order_complete/order_complete.processor';
import { SystemConfigsService } from '@modules/system_configs/system_configs.service';
import { OrderEcommerceWebhookProcessor } from '@modules/queues/order_ecommerce_webhook/order_ecommerce_webhook.processor';
import { TokenModule } from '@modules/auth/token.module';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [
    OrderEcommerceWebhookProcessor,
    PrismaService,
    CacheControlService,
    SystemConfigsService,
    SearchService
  ],
})
export class OrderEcommerceWebhookModule {}
