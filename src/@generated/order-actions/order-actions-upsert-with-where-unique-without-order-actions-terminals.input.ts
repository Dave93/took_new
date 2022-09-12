import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { order_actionsWhereUniqueInput } from './order-actions-where-unique.input';
import { Type } from 'class-transformer';
import { order_actionsUpdateWithoutOrder_actions_terminalsInput } from './order-actions-update-without-order-actions-terminals.input';
import { order_actionsCreateWithoutOrder_actions_terminalsInput } from './order-actions-create-without-order-actions-terminals.input';

@InputType()
export class order_actionsUpsertWithWhereUniqueWithoutOrder_actions_terminalsInput {

    @Field(() => order_actionsWhereUniqueInput, {nullable:false})
    @Type(() => order_actionsWhereUniqueInput)
    where!: order_actionsWhereUniqueInput;

    @Field(() => order_actionsUpdateWithoutOrder_actions_terminalsInput, {nullable:false})
    @Type(() => order_actionsUpdateWithoutOrder_actions_terminalsInput)
    update!: order_actionsUpdateWithoutOrder_actions_terminalsInput;

    @Field(() => order_actionsCreateWithoutOrder_actions_terminalsInput, {nullable:false})
    @Type(() => order_actionsCreateWithoutOrder_actions_terminalsInput)
    create!: order_actionsCreateWithoutOrder_actions_terminalsInput;
}
