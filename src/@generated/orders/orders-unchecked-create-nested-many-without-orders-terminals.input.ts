import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ordersCreateWithoutOrders_terminalsInput } from './orders-create-without-orders-terminals.input';
import { Type } from 'class-transformer';
import { ordersCreateOrConnectWithoutOrders_terminalsInput } from './orders-create-or-connect-without-orders-terminals.input';
import { ordersCreateManyOrders_terminalsInputEnvelope } from './orders-create-many-orders-terminals-input-envelope.input';
import { ordersWhereUniqueInput } from './orders-where-unique.input';

@InputType()
export class ordersUncheckedCreateNestedManyWithoutOrders_terminalsInput {

    @Field(() => [ordersCreateWithoutOrders_terminalsInput], {nullable:true})
    @Type(() => ordersCreateWithoutOrders_terminalsInput)
    create?: Array<ordersCreateWithoutOrders_terminalsInput>;

    @Field(() => [ordersCreateOrConnectWithoutOrders_terminalsInput], {nullable:true})
    @Type(() => ordersCreateOrConnectWithoutOrders_terminalsInput)
    connectOrCreate?: Array<ordersCreateOrConnectWithoutOrders_terminalsInput>;

    @Field(() => ordersCreateManyOrders_terminalsInputEnvelope, {nullable:true})
    @Type(() => ordersCreateManyOrders_terminalsInputEnvelope)
    createMany?: ordersCreateManyOrders_terminalsInputEnvelope;

    @Field(() => [ordersWhereUniqueInput], {nullable:true})
    @Type(() => ordersWhereUniqueInput)
    connect?: Array<ordersWhereUniqueInput>;
}
