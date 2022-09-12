import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { order_locationsUpdateInput } from '../order-locations/order-locations-update.input';
import { Type } from 'class-transformer';
import { order_locationsWhereUniqueInput } from '../order-locations/order-locations-where-unique.input';

@ArgsType()
export class UpdateOneorderLocationsArgs {

    @Field(() => order_locationsUpdateInput, {nullable:false})
    @Type(() => order_locationsUpdateInput)
    data!: order_locationsUpdateInput;

    @Field(() => order_locationsWhereUniqueInput, {nullable:false})
    @Type(() => order_locationsWhereUniqueInput)
    where!: order_locationsWhereUniqueInput;
}
