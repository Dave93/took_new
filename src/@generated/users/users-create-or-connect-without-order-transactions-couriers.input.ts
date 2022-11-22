import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersWhereUniqueInput } from './users-where-unique.input';
import { Type } from 'class-transformer';
import { usersCreateWithoutOrder_transactions_couriersInput } from './users-create-without-order-transactions-couriers.input';

@InputType()
export class usersCreateOrConnectWithoutOrder_transactions_couriersInput {

    @Field(() => usersWhereUniqueInput, {nullable:false})
    @Type(() => usersWhereUniqueInput)
    where!: usersWhereUniqueInput;

    @Field(() => usersCreateWithoutOrder_transactions_couriersInput, {nullable:false})
    @Type(() => usersCreateWithoutOrder_transactions_couriersInput)
    create!: usersCreateWithoutOrder_transactions_couriersInput;
}
