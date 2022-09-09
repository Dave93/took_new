import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ordersScalarWhereInput } from './orders-scalar-where.input';
import { Type } from 'class-transformer';
import { ordersUpdateManyMutationInput } from './orders-update-many-mutation.input';

@InputType()
export class ordersUpdateManyWithWhereWithoutOrders_couriersInput {

    @Field(() => ordersScalarWhereInput, {nullable:false})
    @Type(() => ordersScalarWhereInput)
    where!: ordersScalarWhereInput;

    @Field(() => ordersUpdateManyMutationInput, {nullable:false})
    @Type(() => ordersUpdateManyMutationInput)
    data!: ordersUpdateManyMutationInput;
}
