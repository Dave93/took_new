import { Module } from '@nestjs/common';
import { MediaService } from './media.service';
import { MediaController } from './media.controller';
import { ConfigService } from '@nestjs/config';

@Module({
  controllers: [MediaController],
  providers: [MediaService, ConfigService],
})
export class MediaModule {}
