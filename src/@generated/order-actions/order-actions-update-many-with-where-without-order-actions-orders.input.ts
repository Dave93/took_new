import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { order_actionsScalarWhereInput } from './order-actions-scalar-where.input';
import { Type } from 'class-transformer';
import { order_actionsUpdateManyMutationInput } from './order-actions-update-many-mutation.input';

@InputType()
export class order_actionsUpdateManyWithWhereWithoutOrder_actions_ordersInput {

    @Field(() => order_actionsScalarWhereInput, {nullable:false})
    @Type(() => order_actionsScalarWhereInput)
    where!: order_actionsScalarWhereInput;

    @Field(() => order_actionsUpdateManyMutationInput, {nullable:false})
    @Type(() => order_actionsUpdateManyMutationInput)
    data!: order_actionsUpdateManyMutationInput;
}
