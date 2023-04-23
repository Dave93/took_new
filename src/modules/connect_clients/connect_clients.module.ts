import { Module } from '@nestjs/common';
import { ConnectClientsService } from './connect_clients.service';
import { ConnectClientsResolver } from './connect_clients.resolver';
import { TokenModule } from '@modules/auth/token.module';

@Module({
  imports: [TokenModule],
  providers: [ConnectClientsResolver, ConnectClientsService],
})
export class ConnectClientsModule {}
