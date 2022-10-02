import { Test, TestingModule } from '@nestjs/testing';
import { ConnectClientsService } from './connect_clients.service';

describe('ConnectClientsService', () => {
  let service: ConnectClientsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConnectClientsService],
    }).compile();

    service = module.get<ConnectClientsService>(ConnectClientsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
