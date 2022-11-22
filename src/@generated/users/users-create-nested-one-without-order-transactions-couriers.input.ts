import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersCreateWithoutOrder_transactions_couriersInput } from './users-create-without-order-transactions-couriers.input';
import { Type } from 'class-transformer';
import { usersCreateOrConnectWithoutOrder_transactions_couriersInput } from './users-create-or-connect-without-order-transactions-couriers.input';
import { usersWhereUniqueInput } from './users-where-unique.input';

@InputType()
export class usersCreateNestedOneWithoutOrder_transactions_couriersInput {

    @Field(() => usersCreateWithoutOrder_transactions_couriersInput, {nullable:true})
    @Type(() => usersCreateWithoutOrder_transactions_couriersInput)
    create?: usersCreateWithoutOrder_transactions_couriersInput;

    @Field(() => usersCreateOrConnectWithoutOrder_transactions_couriersInput, {nullable:true})
    @Type(() => usersCreateOrConnectWithoutOrder_transactions_couriersInput)
    connectOrCreate?: usersCreateOrConnectWithoutOrder_transactions_couriersInput;

    @Field(() => usersWhereUniqueInput, {nullable:true})
    @Type(() => usersWhereUniqueInput)
    connect?: usersWhereUniqueInput;
}
