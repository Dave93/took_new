import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { order_actionsWhereUniqueInput } from './order-actions-where-unique.input';
import { Type } from 'class-transformer';
import { order_actionsUpdateWithoutOrder_actions_created_byTousersInput } from './order-actions-update-without-order-actions-created-by-tousers.input';

@InputType()
export class order_actionsUpdateWithWhereUniqueWithoutOrder_actions_created_byTousersInput {

    @Field(() => order_actionsWhereUniqueInput, {nullable:false})
    @Type(() => order_actionsWhereUniqueInput)
    where!: order_actionsWhereUniqueInput;

    @Field(() => order_actionsUpdateWithoutOrder_actions_created_byTousersInput, {nullable:false})
    @Type(() => order_actionsUpdateWithoutOrder_actions_created_byTousersInput)
    data!: order_actionsUpdateWithoutOrder_actions_created_byTousersInput;
}
