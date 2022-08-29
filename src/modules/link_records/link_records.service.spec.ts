import { Test, TestingModule } from '@nestjs/testing';
import { LinkRecordsService } from './link_records.service';

describe('LinkRecordsService', () => {
  let service: LinkRecordsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LinkRecordsService],
    }).compile();

    service = module.get<LinkRecordsService>(LinkRecordsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
