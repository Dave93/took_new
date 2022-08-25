import { CreateTerminalInput } from './create-terminal.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateTerminalInput extends PartialType(CreateTerminalInput) {
  @Field(() => Int)
  id: number;
}
