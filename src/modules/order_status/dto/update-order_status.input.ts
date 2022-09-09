import { CreateOrderStatusInput } from './create-order_status.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateOrderStatusInput extends PartialType(CreateOrderStatusInput) {
  @Field(() => Int)
  id: number;
}
