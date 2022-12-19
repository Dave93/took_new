import { CreateAsssetInput } from './create-assset.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateAsssetInput extends PartialType(CreateAsssetInput) {
  @Field(() => Int)
  id: number;
}
