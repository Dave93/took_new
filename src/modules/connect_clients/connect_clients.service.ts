import { Injectable } from '@nestjs/common';
import { CreateConnectClientInput } from './dto/create-connect_client.input';
import { UpdateConnectClientInput } from './dto/update-connect_client.input';

@Injectable()
export class ConnectClientsService {
  create(createConnectClientInput: CreateConnectClientInput) {
    return 'This action adds a new connectClient';
  }

  findAll() {
    return `This action returns all connectClients`;
  }

  findOne(id: number) {
    return `This action returns a #${id} connectClient`;
  }

  update(id: number, updateConnectClientInput: UpdateConnectClientInput) {
    return `This action updates a #${id} connectClient`;
  }

  remove(id: number) {
    return `This action removes a #${id} connectClient`;
  }
}
