import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { order_locationsUpdateManyMutationInput } from '../order-locations/order-locations-update-many-mutation.input';
import { Type } from 'class-transformer';
import { order_locationsWhereInput } from '../order-locations/order-locations-where.input';

@ArgsType()
export class UpdateManyorderLocationsArgs {

    @Field(() => order_locationsUpdateManyMutationInput, {nullable:false})
    @Type(() => order_locationsUpdateManyMutationInput)
    data!: order_locationsUpdateManyMutationInput;

    @Field(() => order_locationsWhereInput, {nullable:true})
    @Type(() => order_locationsWhereInput)
    where?: order_locationsWhereInput;
}
