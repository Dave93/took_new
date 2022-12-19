import { CreateCourierTerminalBalanceInput } from './create-courier_terminal_balance.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateCourierTerminalBalanceInput extends PartialType(CreateCourierTerminalBalanceInput) {
  @Field(() => Int)
  id: number;
}
