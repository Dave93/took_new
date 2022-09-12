import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { order_locationsWhereUniqueInput } from './order-locations-where-unique.input';
import { Type } from 'class-transformer';
import { order_locationsUpdateWithoutOrder_locations_terminalsInput } from './order-locations-update-without-order-locations-terminals.input';
import { order_locationsCreateWithoutOrder_locations_terminalsInput } from './order-locations-create-without-order-locations-terminals.input';

@InputType()
export class order_locationsUpsertWithWhereUniqueWithoutOrder_locations_terminalsInput {

    @Field(() => order_locationsWhereUniqueInput, {nullable:false})
    @Type(() => order_locationsWhereUniqueInput)
    where!: order_locationsWhereUniqueInput;

    @Field(() => order_locationsUpdateWithoutOrder_locations_terminalsInput, {nullable:false})
    @Type(() => order_locationsUpdateWithoutOrder_locations_terminalsInput)
    update!: order_locationsUpdateWithoutOrder_locations_terminalsInput;

    @Field(() => order_locationsCreateWithoutOrder_locations_terminalsInput, {nullable:false})
    @Type(() => order_locationsCreateWithoutOrder_locations_terminalsInput)
    create!: order_locationsCreateWithoutOrder_locations_terminalsInput;
}
