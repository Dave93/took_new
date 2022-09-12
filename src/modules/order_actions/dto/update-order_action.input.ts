import { CreateOrderActionInput } from './create-order_action.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateOrderActionInput extends PartialType(CreateOrderActionInput) {
  @Field(() => Int)
  id: number;
}
