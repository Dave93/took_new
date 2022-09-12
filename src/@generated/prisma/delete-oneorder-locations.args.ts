import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { order_locationsWhereUniqueInput } from '../order-locations/order-locations-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneorderLocationsArgs {

    @Field(() => order_locationsWhereUniqueInput, {nullable:false})
    @Type(() => order_locationsWhereUniqueInput)
    where!: order_locationsWhereUniqueInput;
}
