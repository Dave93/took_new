import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PubsubService } from './pubsub.service';
import { Pubsub } from './entities/pubsub.entity';
import { CreatePubsubInput } from './dto/create-pubsub.input';
import { UpdatePubsubInput } from './dto/update-pubsub.input';

@Resolver(() => Pubsub)
export class PubsubResolver {
  constructor(private readonly pubsubService: PubsubService) {}

  @Mutation(() => Pubsub)
  createPubsub(@Args('createPubsubInput') createPubsubInput: CreatePubsubInput) {
    return this.pubsubService.create(createPubsubInput);
  }

  @Query(() => [Pubsub], { name: 'pubsub' })
  findAll() {
    return this.pubsubService.findAll();
  }

  @Query(() => Pubsub, { name: 'pubsub' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.pubsubService.findOne(id);
  }

  @Mutation(() => Pubsub)
  updatePubsub(@Args('updatePubsubInput') updatePubsubInput: UpdatePubsubInput) {
    return this.pubsubService.update(updatePubsubInput.id, updatePubsubInput);
  }

  @Mutation(() => Pubsub)
  removePubsub(@Args('id', { type: () => Int }) id: number) {
    return this.pubsubService.remove(id);
  }
}
