import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { order_actionsWhereUniqueInput } from './order-actions-where-unique.input';
import { Type } from 'class-transformer';
import { order_actionsCreateWithoutOrder_actions_created_byTousersInput } from './order-actions-create-without-order-actions-created-by-tousers.input';

@InputType()
export class order_actionsCreateOrConnectWithoutOrder_actions_created_byTousersInput {

    @Field(() => order_actionsWhereUniqueInput, {nullable:false})
    @Type(() => order_actionsWhereUniqueInput)
    where!: order_actionsWhereUniqueInput;

    @Field(() => order_actionsCreateWithoutOrder_actions_created_byTousersInput, {nullable:false})
    @Type(() => order_actionsCreateWithoutOrder_actions_created_byTousersInput)
    create!: order_actionsCreateWithoutOrder_actions_created_byTousersInput;
}
