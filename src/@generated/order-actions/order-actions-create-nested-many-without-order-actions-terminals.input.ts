import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { order_actionsCreateWithoutOrder_actions_terminalsInput } from './order-actions-create-without-order-actions-terminals.input';
import { Type } from 'class-transformer';
import { order_actionsCreateOrConnectWithoutOrder_actions_terminalsInput } from './order-actions-create-or-connect-without-order-actions-terminals.input';
import { order_actionsCreateManyOrder_actions_terminalsInputEnvelope } from './order-actions-create-many-order-actions-terminals-input-envelope.input';
import { order_actionsWhereUniqueInput } from './order-actions-where-unique.input';

@InputType()
export class order_actionsCreateNestedManyWithoutOrder_actions_terminalsInput {

    @Field(() => [order_actionsCreateWithoutOrder_actions_terminalsInput], {nullable:true})
    @Type(() => order_actionsCreateWithoutOrder_actions_terminalsInput)
    create?: Array<order_actionsCreateWithoutOrder_actions_terminalsInput>;

    @Field(() => [order_actionsCreateOrConnectWithoutOrder_actions_terminalsInput], {nullable:true})
    @Type(() => order_actionsCreateOrConnectWithoutOrder_actions_terminalsInput)
    connectOrCreate?: Array<order_actionsCreateOrConnectWithoutOrder_actions_terminalsInput>;

    @Field(() => order_actionsCreateManyOrder_actions_terminalsInputEnvelope, {nullable:true})
    @Type(() => order_actionsCreateManyOrder_actions_terminalsInputEnvelope)
    createMany?: order_actionsCreateManyOrder_actions_terminalsInputEnvelope;

    @Field(() => [order_actionsWhereUniqueInput], {nullable:true})
    @Type(() => order_actionsWhereUniqueInput)
    connect?: Array<order_actionsWhereUniqueInput>;
}
