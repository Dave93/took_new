import { CreateOrderTransactionInput } from './create-order_transaction.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateOrderTransactionInput extends PartialType(CreateOrderTransactionInput) {
  @Field(() => Int)
  id: number;
}
