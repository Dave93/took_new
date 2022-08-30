import { Test, TestingModule } from '@nestjs/testing';
import { WorkScheduleEntriesService } from './work_schedule_entries.service';

describe('WorkScheduleEntriesService', () => {
  let service: WorkScheduleEntriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WorkScheduleEntriesService],
    }).compile();

    service = module.get<WorkScheduleEntriesService>(WorkScheduleEntriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
