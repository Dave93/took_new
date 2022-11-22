import { Injectable } from '@nestjs/common';
import { CreatePubsubInput } from './dto/create-pubsub.input';
import { UpdatePubsubInput } from './dto/update-pubsub.input';

@Injectable()
export class PubsubService {
  create(createPubsubInput: CreatePubsubInput) {
    return 'This action adds a new pubsub';
  }

  findAll() {
    return `This action returns all pubsub`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pubsub`;
  }

  update(id: number, updatePubsubInput: UpdatePubsubInput) {
    return `This action updates a #${id} pubsub`;
  }

  remove(id: number) {
    return `This action removes a #${id} pubsub`;
  }
}
