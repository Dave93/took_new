import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { customersCreateWithoutOrders_customersInput } from './customers-create-without-orders-customers.input';
import { Type } from 'class-transformer';
import { customersCreateOrConnectWithoutOrders_customersInput } from './customers-create-or-connect-without-orders-customers.input';
import { customersWhereUniqueInput } from './customers-where-unique.input';

@InputType()
export class customersCreateNestedOneWithoutOrders_customersInput {

    @Field(() => customersCreateWithoutOrders_customersInput, {nullable:true})
    @Type(() => customersCreateWithoutOrders_customersInput)
    create?: customersCreateWithoutOrders_customersInput;

    @Field(() => customersCreateOrConnectWithoutOrders_customersInput, {nullable:true})
    @Type(() => customersCreateOrConnectWithoutOrders_customersInput)
    connectOrCreate?: customersCreateOrConnectWithoutOrders_customersInput;

    @Field(() => customersWhereUniqueInput, {nullable:true})
    @Type(() => customersWhereUniqueInput)
    connect?: customersWhereUniqueInput;
}
