import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { order_actionsWhereUniqueInput } from '../order-actions/order-actions-where-unique.input';
import { Type } from 'class-transformer';
import { order_actionsCreateInput } from '../order-actions/order-actions-create.input';
import { order_actionsUpdateInput } from '../order-actions/order-actions-update.input';

@ArgsType()
export class UpsertOneorderActionsArgs {

    @Field(() => order_actionsWhereUniqueInput, {nullable:false})
    @Type(() => order_actionsWhereUniqueInput)
    where!: order_actionsWhereUniqueInput;

    @Field(() => order_actionsCreateInput, {nullable:false})
    @Type(() => order_actionsCreateInput)
    create!: order_actionsCreateInput;

    @Field(() => order_actionsUpdateInput, {nullable:false})
    @Type(() => order_actionsUpdateInput)
    update!: order_actionsUpdateInput;
}
