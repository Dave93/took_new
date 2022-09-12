import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { order_actionsUpdateManyMutationInput } from '../order-actions/order-actions-update-many-mutation.input';
import { Type } from 'class-transformer';
import { order_actionsWhereInput } from '../order-actions/order-actions-where.input';

@ArgsType()
export class UpdateManyorderActionsArgs {

    @Field(() => order_actionsUpdateManyMutationInput, {nullable:false})
    @Type(() => order_actionsUpdateManyMutationInput)
    data!: order_actionsUpdateManyMutationInput;

    @Field(() => order_actionsWhereInput, {nullable:true})
    @Type(() => order_actionsWhereInput)
    where?: order_actionsWhereInput;
}
