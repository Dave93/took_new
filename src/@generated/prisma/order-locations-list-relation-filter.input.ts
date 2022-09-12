import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { order_locationsWhereInput } from '../order-locations/order-locations-where.input';

@InputType()
export class Order_locationsListRelationFilter {

    @Field(() => order_locationsWhereInput, {nullable:true})
    every?: order_locationsWhereInput;

    @Field(() => order_locationsWhereInput, {nullable:true})
    some?: order_locationsWhereInput;

    @Field(() => order_locationsWhereInput, {nullable:true})
    none?: order_locationsWhereInput;
}
