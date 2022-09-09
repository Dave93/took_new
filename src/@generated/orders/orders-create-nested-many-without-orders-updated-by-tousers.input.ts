import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ordersCreateWithoutOrders_updated_byTousersInput } from './orders-create-without-orders-updated-by-tousers.input';
import { Type } from 'class-transformer';
import { ordersCreateOrConnectWithoutOrders_updated_byTousersInput } from './orders-create-or-connect-without-orders-updated-by-tousers.input';
import { ordersCreateManyOrders_updated_byTousersInputEnvelope } from './orders-create-many-orders-updated-by-tousers-input-envelope.input';
import { ordersWhereUniqueInput } from './orders-where-unique.input';

@InputType()
export class ordersCreateNestedManyWithoutOrders_updated_byTousersInput {

    @Field(() => [ordersCreateWithoutOrders_updated_byTousersInput], {nullable:true})
    @Type(() => ordersCreateWithoutOrders_updated_byTousersInput)
    create?: Array<ordersCreateWithoutOrders_updated_byTousersInput>;

    @Field(() => [ordersCreateOrConnectWithoutOrders_updated_byTousersInput], {nullable:true})
    @Type(() => ordersCreateOrConnectWithoutOrders_updated_byTousersInput)
    connectOrCreate?: Array<ordersCreateOrConnectWithoutOrders_updated_byTousersInput>;

    @Field(() => ordersCreateManyOrders_updated_byTousersInputEnvelope, {nullable:true})
    @Type(() => ordersCreateManyOrders_updated_byTousersInputEnvelope)
    createMany?: ordersCreateManyOrders_updated_byTousersInputEnvelope;

    @Field(() => [ordersWhereUniqueInput], {nullable:true})
    @Type(() => ordersWhereUniqueInput)
    connect?: Array<ordersWhereUniqueInput>;
}
