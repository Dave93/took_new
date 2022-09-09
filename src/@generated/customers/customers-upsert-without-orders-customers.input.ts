import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { customersUpdateWithoutOrders_customersInput } from './customers-update-without-orders-customers.input';
import { Type } from 'class-transformer';
import { customersCreateWithoutOrders_customersInput } from './customers-create-without-orders-customers.input';

@InputType()
export class customersUpsertWithoutOrders_customersInput {

    @Field(() => customersUpdateWithoutOrders_customersInput, {nullable:false})
    @Type(() => customersUpdateWithoutOrders_customersInput)
    update!: customersUpdateWithoutOrders_customersInput;

    @Field(() => customersCreateWithoutOrders_customersInput, {nullable:false})
    @Type(() => customersCreateWithoutOrders_customersInput)
    create!: customersCreateWithoutOrders_customersInput;
}
