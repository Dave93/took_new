import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { order_locationsWhereUniqueInput } from './order-locations-where-unique.input';
import { Type } from 'class-transformer';
import { order_locationsUpdateWithoutOrder_locations_created_byTousersInput } from './order-locations-update-without-order-locations-created-by-tousers.input';

@InputType()
export class order_locationsUpdateWithWhereUniqueWithoutOrder_locations_created_byTousersInput {

    @Field(() => order_locationsWhereUniqueInput, {nullable:false})
    @Type(() => order_locationsWhereUniqueInput)
    where!: order_locationsWhereUniqueInput;

    @Field(() => order_locationsUpdateWithoutOrder_locations_created_byTousersInput, {nullable:false})
    @Type(() => order_locationsUpdateWithoutOrder_locations_created_byTousersInput)
    data!: order_locationsUpdateWithoutOrder_locations_created_byTousersInput;
}
