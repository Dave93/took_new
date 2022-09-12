import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { order_locationsWhereUniqueInput } from '../order-locations/order-locations-where-unique.input';
import { Type } from 'class-transformer';
import { order_locationsCreateInput } from '../order-locations/order-locations-create.input';
import { order_locationsUpdateInput } from '../order-locations/order-locations-update.input';

@ArgsType()
export class UpsertOneorderLocationsArgs {

    @Field(() => order_locationsWhereUniqueInput, {nullable:false})
    @Type(() => order_locationsWhereUniqueInput)
    where!: order_locationsWhereUniqueInput;

    @Field(() => order_locationsCreateInput, {nullable:false})
    @Type(() => order_locationsCreateInput)
    create!: order_locationsCreateInput;

    @Field(() => order_locationsUpdateInput, {nullable:false})
    @Type(() => order_locationsUpdateInput)
    update!: order_locationsUpdateInput;
}
