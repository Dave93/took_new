import { Module } from '@nestjs/common';
import { BrandsService } from './brands.service';
import { BrandsResolver } from './brands.resolver';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../../prisma.service';

@Module({
  providers: [BrandsResolver, BrandsService, PrismaService],
})
export class BrandsModule {}
