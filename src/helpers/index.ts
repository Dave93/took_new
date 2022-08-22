import { Field, ObjectType } from '@nestjs/graphql';
import { HashHelper } from './hash.helper';

@ObjectType()
class BatchPayload {
  @Field(() => Number)
  count: number;
}
export { HashHelper, BatchPayload };
