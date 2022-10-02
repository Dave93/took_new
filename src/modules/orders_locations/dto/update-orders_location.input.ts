import { CreateOrdersLocationInput } from './create-orders_location.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateOrdersLocationInput extends PartialType(CreateOrdersLocationInput) {
  @Field(() => Int)
  id: number;
}
