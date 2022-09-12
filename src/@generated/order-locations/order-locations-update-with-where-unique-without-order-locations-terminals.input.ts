import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { order_locationsWhereUniqueInput } from './order-locations-where-unique.input';
import { Type } from 'class-transformer';
import { order_locationsUpdateWithoutOrder_locations_terminalsInput } from './order-locations-update-without-order-locations-terminals.input';

@InputType()
export class order_locationsUpdateWithWhereUniqueWithoutOrder_locations_terminalsInput {

    @Field(() => order_locationsWhereUniqueInput, {nullable:false})
    @Type(() => order_locationsWhereUniqueInput)
    where!: order_locationsWhereUniqueInput;

    @Field(() => order_locationsUpdateWithoutOrder_locations_terminalsInput, {nullable:false})
    @Type(() => order_locationsUpdateWithoutOrder_locations_terminalsInput)
    data!: order_locationsUpdateWithoutOrder_locations_terminalsInput;
}
