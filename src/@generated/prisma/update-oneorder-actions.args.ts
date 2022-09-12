import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { order_actionsUpdateInput } from '../order-actions/order-actions-update.input';
import { Type } from 'class-transformer';
import { order_actionsWhereUniqueInput } from '../order-actions/order-actions-where-unique.input';

@ArgsType()
export class UpdateOneorderActionsArgs {

    @Field(() => order_actionsUpdateInput, {nullable:false})
    @Type(() => order_actionsUpdateInput)
    data!: order_actionsUpdateInput;

    @Field(() => order_actionsWhereUniqueInput, {nullable:false})
    @Type(() => order_actionsWhereUniqueInput)
    where!: order_actionsWhereUniqueInput;
}
