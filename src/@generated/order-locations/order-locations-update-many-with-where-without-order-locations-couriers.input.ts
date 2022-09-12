import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { order_locationsScalarWhereInput } from './order-locations-scalar-where.input';
import { Type } from 'class-transformer';
import { order_locationsUpdateManyMutationInput } from './order-locations-update-many-mutation.input';

@InputType()
export class order_locationsUpdateManyWithWhereWithoutOrder_locations_couriersInput {

    @Field(() => order_locationsScalarWhereInput, {nullable:false})
    @Type(() => order_locationsScalarWhereInput)
    where!: order_locationsScalarWhereInput;

    @Field(() => order_locationsUpdateManyMutationInput, {nullable:false})
    @Type(() => order_locationsUpdateManyMutationInput)
    data!: order_locationsUpdateManyMutationInput;
}
