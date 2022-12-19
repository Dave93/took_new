import { CreateSystemConfigInput } from './create-system_config.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateSystemConfigInput extends PartialType(CreateSystemConfigInput) {
  @Field(() => Int)
  id: number;
}
