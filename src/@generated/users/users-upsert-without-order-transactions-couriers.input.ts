import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersUpdateWithoutOrder_transactions_couriersInput } from './users-update-without-order-transactions-couriers.input';
import { Type } from 'class-transformer';
import { usersCreateWithoutOrder_transactions_couriersInput } from './users-create-without-order-transactions-couriers.input';

@InputType()
export class usersUpsertWithoutOrder_transactions_couriersInput {

    @Field(() => usersUpdateWithoutOrder_transactions_couriersInput, {nullable:false})
    @Type(() => usersUpdateWithoutOrder_transactions_couriersInput)
    update!: usersUpdateWithoutOrder_transactions_couriersInput;

    @Field(() => usersCreateWithoutOrder_transactions_couriersInput, {nullable:false})
    @Type(() => usersCreateWithoutOrder_transactions_couriersInput)
    create!: usersCreateWithoutOrder_transactions_couriersInput;
}
