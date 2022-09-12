import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { order_locationsWhereInput } from '../order-locations/order-locations-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyorderLocationsArgs {

    @Field(() => order_locationsWhereInput, {nullable:true})
    @Type(() => order_locationsWhereInput)
    where?: order_locationsWhereInput;
}
