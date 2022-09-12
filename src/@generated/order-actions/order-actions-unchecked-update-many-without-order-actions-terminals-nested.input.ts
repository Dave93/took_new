import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { order_actionsCreateWithoutOrder_actions_terminalsInput } from './order-actions-create-without-order-actions-terminals.input';
import { Type } from 'class-transformer';
import { order_actionsCreateOrConnectWithoutOrder_actions_terminalsInput } from './order-actions-create-or-connect-without-order-actions-terminals.input';
import { order_actionsUpsertWithWhereUniqueWithoutOrder_actions_terminalsInput } from './order-actions-upsert-with-where-unique-without-order-actions-terminals.input';
import { order_actionsCreateManyOrder_actions_terminalsInputEnvelope } from './order-actions-create-many-order-actions-terminals-input-envelope.input';
import { order_actionsWhereUniqueInput } from './order-actions-where-unique.input';
import { order_actionsUpdateWithWhereUniqueWithoutOrder_actions_terminalsInput } from './order-actions-update-with-where-unique-without-order-actions-terminals.input';
import { order_actionsUpdateManyWithWhereWithoutOrder_actions_terminalsInput } from './order-actions-update-many-with-where-without-order-actions-terminals.input';
import { order_actionsScalarWhereInput } from './order-actions-scalar-where.input';

@InputType()
export class order_actionsUncheckedUpdateManyWithoutOrder_actions_terminalsNestedInput {

    @Field(() => [order_actionsCreateWithoutOrder_actions_terminalsInput], {nullable:true})
    @Type(() => order_actionsCreateWithoutOrder_actions_terminalsInput)
    create?: Array<order_actionsCreateWithoutOrder_actions_terminalsInput>;

    @Field(() => [order_actionsCreateOrConnectWithoutOrder_actions_terminalsInput], {nullable:true})
    @Type(() => order_actionsCreateOrConnectWithoutOrder_actions_terminalsInput)
    connectOrCreate?: Array<order_actionsCreateOrConnectWithoutOrder_actions_terminalsInput>;

    @Field(() => [order_actionsUpsertWithWhereUniqueWithoutOrder_actions_terminalsInput], {nullable:true})
    @Type(() => order_actionsUpsertWithWhereUniqueWithoutOrder_actions_terminalsInput)
    upsert?: Array<order_actionsUpsertWithWhereUniqueWithoutOrder_actions_terminalsInput>;

    @Field(() => order_actionsCreateManyOrder_actions_terminalsInputEnvelope, {nullable:true})
    @Type(() => order_actionsCreateManyOrder_actions_terminalsInputEnvelope)
    createMany?: order_actionsCreateManyOrder_actions_terminalsInputEnvelope;

    @Field(() => [order_actionsWhereUniqueInput], {nullable:true})
    @Type(() => order_actionsWhereUniqueInput)
    set?: Array<order_actionsWhereUniqueInput>;

    @Field(() => [order_actionsWhereUniqueInput], {nullable:true})
    @Type(() => order_actionsWhereUniqueInput)
    disconnect?: Array<order_actionsWhereUniqueInput>;

    @Field(() => [order_actionsWhereUniqueInput], {nullable:true})
    @Type(() => order_actionsWhereUniqueInput)
    delete?: Array<order_actionsWhereUniqueInput>;

    @Field(() => [order_actionsWhereUniqueInput], {nullable:true})
    @Type(() => order_actionsWhereUniqueInput)
    connect?: Array<order_actionsWhereUniqueInput>;

    @Field(() => [order_actionsUpdateWithWhereUniqueWithoutOrder_actions_terminalsInput], {nullable:true})
    @Type(() => order_actionsUpdateWithWhereUniqueWithoutOrder_actions_terminalsInput)
    update?: Array<order_actionsUpdateWithWhereUniqueWithoutOrder_actions_terminalsInput>;

    @Field(() => [order_actionsUpdateManyWithWhereWithoutOrder_actions_terminalsInput], {nullable:true})
    @Type(() => order_actionsUpdateManyWithWhereWithoutOrder_actions_terminalsInput)
    updateMany?: Array<order_actionsUpdateManyWithWhereWithoutOrder_actions_terminalsInput>;

    @Field(() => [order_actionsScalarWhereInput], {nullable:true})
    @Type(() => order_actionsScalarWhereInput)
    deleteMany?: Array<order_actionsScalarWhereInput>;
}
