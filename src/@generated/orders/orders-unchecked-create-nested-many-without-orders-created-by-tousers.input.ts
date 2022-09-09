import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ordersCreateWithoutOrders_created_byTousersInput } from './orders-create-without-orders-created-by-tousers.input';
import { Type } from 'class-transformer';
import { ordersCreateOrConnectWithoutOrders_created_byTousersInput } from './orders-create-or-connect-without-orders-created-by-tousers.input';
import { ordersCreateManyOrders_created_byTousersInputEnvelope } from './orders-create-many-orders-created-by-tousers-input-envelope.input';
import { ordersWhereUniqueInput } from './orders-where-unique.input';

@InputType()
export class ordersUncheckedCreateNestedManyWithoutOrders_created_byTousersInput {

    @Field(() => [ordersCreateWithoutOrders_created_byTousersInput], {nullable:true})
    @Type(() => ordersCreateWithoutOrders_created_byTousersInput)
    create?: Array<ordersCreateWithoutOrders_created_byTousersInput>;

    @Field(() => [ordersCreateOrConnectWithoutOrders_created_byTousersInput], {nullable:true})
    @Type(() => ordersCreateOrConnectWithoutOrders_created_byTousersInput)
    connectOrCreate?: Array<ordersCreateOrConnectWithoutOrders_created_byTousersInput>;

    @Field(() => ordersCreateManyOrders_created_byTousersInputEnvelope, {nullable:true})
    @Type(() => ordersCreateManyOrders_created_byTousersInputEnvelope)
    createMany?: ordersCreateManyOrders_created_byTousersInputEnvelope;

    @Field(() => [ordersWhereUniqueInput], {nullable:true})
    @Type(() => ordersWhereUniqueInput)
    connect?: Array<ordersWhereUniqueInput>;
}
