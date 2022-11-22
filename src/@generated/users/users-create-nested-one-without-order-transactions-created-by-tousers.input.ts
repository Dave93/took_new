import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersCreateWithoutOrder_transactions_created_byTousersInput } from './users-create-without-order-transactions-created-by-tousers.input';
import { Type } from 'class-transformer';
import { usersCreateOrConnectWithoutOrder_transactions_created_byTousersInput } from './users-create-or-connect-without-order-transactions-created-by-tousers.input';
import { usersWhereUniqueInput } from './users-where-unique.input';

@InputType()
export class usersCreateNestedOneWithoutOrder_transactions_created_byTousersInput {

    @Field(() => usersCreateWithoutOrder_transactions_created_byTousersInput, {nullable:true})
    @Type(() => usersCreateWithoutOrder_transactions_created_byTousersInput)
    create?: usersCreateWithoutOrder_transactions_created_byTousersInput;

    @Field(() => usersCreateOrConnectWithoutOrder_transactions_created_byTousersInput, {nullable:true})
    @Type(() => usersCreateOrConnectWithoutOrder_transactions_created_byTousersInput)
    connectOrCreate?: usersCreateOrConnectWithoutOrder_transactions_created_byTousersInput;

    @Field(() => usersWhereUniqueInput, {nullable:true})
    @Type(() => usersWhereUniqueInput)
    connect?: usersWhereUniqueInput;
}
