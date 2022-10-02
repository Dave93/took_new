import { Global, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SearchService } from './search.service';

@Global()
@Module({
  imports: [ConfigModule],
  providers: [ConfigService, SearchService],
})
export class SearchModule {}
