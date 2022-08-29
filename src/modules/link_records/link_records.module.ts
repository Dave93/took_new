import { Module } from '@nestjs/common';
import { LinkRecordsService } from './link_records.service';
import { LinkRecordsResolver } from './link_records.resolver';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [LinkRecordsResolver, LinkRecordsService, PrismaService],
})
export class LinkRecordsModule {}
