import { Test, TestingModule } from '@nestjs/testing';
import { ConnectClientsResolver } from './connect_clients.resolver';
import { ConnectClientsService } from './connect_clients.service';

describe('ConnectClientsResolver', () => {
  let resolver: ConnectClientsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConnectClientsResolver, ConnectClientsService],
    }).compile();

    resolver = module.get<ConnectClientsResolver>(ConnectClientsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
