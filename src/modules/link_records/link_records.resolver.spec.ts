import { Test, TestingModule } from '@nestjs/testing';
import { LinkRecordsResolver } from './link_records.resolver';
import { LinkRecordsService } from './link_records.service';

describe('LinkRecordsResolver', () => {
  let resolver: LinkRecordsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LinkRecordsResolver, LinkRecordsService],
    }).compile();

    resolver = module.get<LinkRecordsResolver>(LinkRecordsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
