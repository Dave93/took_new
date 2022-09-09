import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ordersCreateWithoutOrders_terminalsInput } from './orders-create-without-orders-terminals.input';
import { Type } from 'class-transformer';
import { ordersCreateOrConnectWithoutOrders_terminalsInput } from './orders-create-or-connect-without-orders-terminals.input';
import { ordersUpsertWithWhereUniqueWithoutOrders_terminalsInput } from './orders-upsert-with-where-unique-without-orders-terminals.input';
import { ordersCreateManyOrders_terminalsInputEnvelope } from './orders-create-many-orders-terminals-input-envelope.input';
import { ordersWhereUniqueInput } from './orders-where-unique.input';
import { ordersUpdateWithWhereUniqueWithoutOrders_terminalsInput } from './orders-update-with-where-unique-without-orders-terminals.input';
import { ordersUpdateManyWithWhereWithoutOrders_terminalsInput } from './orders-update-many-with-where-without-orders-terminals.input';
import { ordersScalarWhereInput } from './orders-scalar-where.input';

@InputType()
export class ordersUncheckedUpdateManyWithoutOrders_terminalsNestedInput {

    @Field(() => [ordersCreateWithoutOrders_terminalsInput], {nullable:true})
    @Type(() => ordersCreateWithoutOrders_terminalsInput)
    create?: Array<ordersCreateWithoutOrders_terminalsInput>;

    @Field(() => [ordersCreateOrConnectWithoutOrders_terminalsInput], {nullable:true})
    @Type(() => ordersCreateOrConnectWithoutOrders_terminalsInput)
    connectOrCreate?: Array<ordersCreateOrConnectWithoutOrders_terminalsInput>;

    @Field(() => [ordersUpsertWithWhereUniqueWithoutOrders_terminalsInput], {nullable:true})
    @Type(() => ordersUpsertWithWhereUniqueWithoutOrders_terminalsInput)
    upsert?: Array<ordersUpsertWithWhereUniqueWithoutOrders_terminalsInput>;

    @Field(() => ordersCreateManyOrders_terminalsInputEnvelope, {nullable:true})
    @Type(() => ordersCreateManyOrders_terminalsInputEnvelope)
    createMany?: ordersCreateManyOrders_terminalsInputEnvelope;

    @Field(() => [ordersWhereUniqueInput], {nullable:true})
    @Type(() => ordersWhereUniqueInput)
    set?: Array<ordersWhereUniqueInput>;

    @Field(() => [ordersWhereUniqueInput], {nullable:true})
    @Type(() => ordersWhereUniqueInput)
    disconnect?: Array<ordersWhereUniqueInput>;

    @Field(() => [ordersWhereUniqueInput], {nullable:true})
    @Type(() => ordersWhereUniqueInput)
    delete?: Array<ordersWhereUniqueInput>;

    @Field(() => [ordersWhereUniqueInput], {nullable:true})
    @Type(() => ordersWhereUniqueInput)
    connect?: Array<ordersWhereUniqueInput>;

    @Field(() => [ordersUpdateWithWhereUniqueWithoutOrders_terminalsInput], {nullable:true})
    @Type(() => ordersUpdateWithWhereUniqueWithoutOrders_terminalsInput)
    update?: Array<ordersUpdateWithWhereUniqueWithoutOrders_terminalsInput>;

    @Field(() => [ordersUpdateManyWithWhereWithoutOrders_terminalsInput], {nullable:true})
    @Type(() => ordersUpdateManyWithWhereWithoutOrders_terminalsInput)
    updateMany?: Array<ordersUpdateManyWithWhereWithoutOrders_terminalsInput>;

    @Field(() => [ordersScalarWhereInput], {nullable:true})
    @Type(() => ordersScalarWhereInput)
    deleteMany?: Array<ordersScalarWhereInput>;
}
