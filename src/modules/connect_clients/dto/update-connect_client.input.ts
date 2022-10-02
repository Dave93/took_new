import { CreateConnectClientInput } from './create-connect_client.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateConnectClientInput extends PartialType(CreateConnectClientInput) {
  @Field(() => Int)
  id: number;
}
