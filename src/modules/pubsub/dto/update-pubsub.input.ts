import { CreatePubsubInput } from './create-pubsub.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdatePubsubInput extends PartialType(CreatePubsubInput) {
  @Field(() => Int)
  id: number;
}
