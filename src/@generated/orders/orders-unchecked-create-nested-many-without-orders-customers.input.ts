import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ordersCreateWithoutOrders_customersInput } from './orders-create-without-orders-customers.input';
import { Type } from 'class-transformer';
import { ordersCreateOrConnectWithoutOrders_customersInput } from './orders-create-or-connect-without-orders-customers.input';
import { ordersCreateManyOrders_customersInputEnvelope } from './orders-create-many-orders-customers-input-envelope.input';
import { ordersWhereUniqueInput } from './orders-where-unique.input';

@InputType()
export class ordersUncheckedCreateNestedManyWithoutOrders_customersInput {

    @Field(() => [ordersCreateWithoutOrders_customersInput], {nullable:true})
    @Type(() => ordersCreateWithoutOrders_customersInput)
    create?: Array<ordersCreateWithoutOrders_customersInput>;

    @Field(() => [ordersCreateOrConnectWithoutOrders_customersInput], {nullable:true})
    @Type(() => ordersCreateOrConnectWithoutOrders_customersInput)
    connectOrCreate?: Array<ordersCreateOrConnectWithoutOrders_customersInput>;

    @Field(() => ordersCreateManyOrders_customersInputEnvelope, {nullable:true})
    @Type(() => ordersCreateManyOrders_customersInputEnvelope)
    createMany?: ordersCreateManyOrders_customersInputEnvelope;

    @Field(() => [ordersWhereUniqueInput], {nullable:true})
    @Type(() => ordersWhereUniqueInput)
    connect?: Array<ordersWhereUniqueInput>;
}
