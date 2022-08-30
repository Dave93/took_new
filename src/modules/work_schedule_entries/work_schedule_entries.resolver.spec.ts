import { Test, TestingModule } from '@nestjs/testing';
import { WorkScheduleEntriesResolver } from './work_schedule_entries.resolver';
import { WorkScheduleEntriesService } from './work_schedule_entries.service';

describe('WorkScheduleEntriesResolver', () => {
  let resolver: WorkScheduleEntriesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WorkScheduleEntriesResolver, WorkScheduleEntriesService],
    }).compile();

    resolver = module.get<WorkScheduleEntriesResolver>(WorkScheduleEntriesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
