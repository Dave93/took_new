import { Test, TestingModule } from '@nestjs/testing';
import { WorkSchedulesService } from './work_schedules.service';

describe('WorkSchedulesService', () => {
  let service: WorkSchedulesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WorkSchedulesService],
    }).compile();

    service = module.get<WorkSchedulesService>(WorkSchedulesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
