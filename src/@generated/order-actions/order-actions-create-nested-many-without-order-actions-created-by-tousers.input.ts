import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { order_actionsCreateWithoutOrder_actions_created_byTousersInput } from './order-actions-create-without-order-actions-created-by-tousers.input';
import { Type } from 'class-transformer';
import { order_actionsCreateOrConnectWithoutOrder_actions_created_byTousersInput } from './order-actions-create-or-connect-without-order-actions-created-by-tousers.input';
import { order_actionsCreateManyOrder_actions_created_byTousersInputEnvelope } from './order-actions-create-many-order-actions-created-by-tousers-input-envelope.input';
import { order_actionsWhereUniqueInput } from './order-actions-where-unique.input';

@InputType()
export class order_actionsCreateNestedManyWithoutOrder_actions_created_byTousersInput {

    @Field(() => [order_actionsCreateWithoutOrder_actions_created_byTousersInput], {nullable:true})
    @Type(() => order_actionsCreateWithoutOrder_actions_created_byTousersInput)
    create?: Array<order_actionsCreateWithoutOrder_actions_created_byTousersInput>;

    @Field(() => [order_actionsCreateOrConnectWithoutOrder_actions_created_byTousersInput], {nullable:true})
    @Type(() => order_actionsCreateOrConnectWithoutOrder_actions_created_byTousersInput)
    connectOrCreate?: Array<order_actionsCreateOrConnectWithoutOrder_actions_created_byTousersInput>;

    @Field(() => order_actionsCreateManyOrder_actions_created_byTousersInputEnvelope, {nullable:true})
    @Type(() => order_actionsCreateManyOrder_actions_created_byTousersInputEnvelope)
    createMany?: order_actionsCreateManyOrder_actions_created_byTousersInputEnvelope;

    @Field(() => [order_actionsWhereUniqueInput], {nullable:true})
    @Type(() => order_actionsWhereUniqueInput)
    connect?: Array<order_actionsWhereUniqueInput>;
}
