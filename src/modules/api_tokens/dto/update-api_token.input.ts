import { CreateApiTokenInput } from './create-api_token.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateApiTokenInput extends PartialType(CreateApiTokenInput) {
  @Field(() => Int)
  id: number;
}
