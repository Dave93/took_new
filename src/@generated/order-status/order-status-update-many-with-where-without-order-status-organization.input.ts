import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { order_statusScalarWhereInput } from './order-status-scalar-where.input';
import { Type } from 'class-transformer';
import { order_statusUpdateManyMutationInput } from './order-status-update-many-mutation.input';

@InputType()
export class order_statusUpdateManyWithWhereWithoutOrder_status_organizationInput {

    @Field(() => order_statusScalarWhereInput, {nullable:false})
    @Type(() => order_statusScalarWhereInput)
    where!: order_statusScalarWhereInput;

    @Field(() => order_statusUpdateManyMutationInput, {nullable:false})
    @Type(() => order_statusUpdateManyMutationInput)
    data!: order_statusUpdateManyMutationInput;
}
