import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { customersWhereUniqueInput } from './customers-where-unique.input';
import { Type } from 'class-transformer';
import { customersCreateWithoutOrders_customersInput } from './customers-create-without-orders-customers.input';

@InputType()
export class customersCreateOrConnectWithoutOrders_customersInput {

    @Field(() => customersWhereUniqueInput, {nullable:false})
    @Type(() => customersWhereUniqueInput)
    where!: customersWhereUniqueInput;

    @Field(() => customersCreateWithoutOrders_customersInput, {nullable:false})
    @Type(() => customersCreateWithoutOrders_customersInput)
    create!: customersCreateWithoutOrders_customersInput;
}
