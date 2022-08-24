import { Test, TestingModule } from '@nestjs/testing';
import { WorkSchedulesResolver } from './work_schedules.resolver';
import { WorkSchedulesService } from './work_schedules.service';

describe('WorkSchedulesResolver', () => {
  let resolver: WorkSchedulesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WorkSchedulesResolver, WorkSchedulesService],
    }).compile();

    resolver = module.get<WorkSchedulesResolver>(WorkSchedulesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
