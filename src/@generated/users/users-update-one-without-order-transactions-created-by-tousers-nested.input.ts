import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersCreateWithoutOrder_transactions_created_byTousersInput } from './users-create-without-order-transactions-created-by-tousers.input';
import { Type } from 'class-transformer';
import { usersCreateOrConnectWithoutOrder_transactions_created_byTousersInput } from './users-create-or-connect-without-order-transactions-created-by-tousers.input';
import { usersUpsertWithoutOrder_transactions_created_byTousersInput } from './users-upsert-without-order-transactions-created-by-tousers.input';
import { usersWhereUniqueInput } from './users-where-unique.input';
import { usersUpdateWithoutOrder_transactions_created_byTousersInput } from './users-update-without-order-transactions-created-by-tousers.input';

@InputType()
export class usersUpdateOneWithoutOrder_transactions_created_byTousersNestedInput {

    @Field(() => usersCreateWithoutOrder_transactions_created_byTousersInput, {nullable:true})
    @Type(() => usersCreateWithoutOrder_transactions_created_byTousersInput)
    create?: usersCreateWithoutOrder_transactions_created_byTousersInput;

    @Field(() => usersCreateOrConnectWithoutOrder_transactions_created_byTousersInput, {nullable:true})
    @Type(() => usersCreateOrConnectWithoutOrder_transactions_created_byTousersInput)
    connectOrCreate?: usersCreateOrConnectWithoutOrder_transactions_created_byTousersInput;

    @Field(() => usersUpsertWithoutOrder_transactions_created_byTousersInput, {nullable:true})
    @Type(() => usersUpsertWithoutOrder_transactions_created_byTousersInput)
    upsert?: usersUpsertWithoutOrder_transactions_created_byTousersInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => usersWhereUniqueInput, {nullable:true})
    @Type(() => usersWhereUniqueInput)
    connect?: usersWhereUniqueInput;

    @Field(() => usersUpdateWithoutOrder_transactions_created_byTousersInput, {nullable:true})
    @Type(() => usersUpdateWithoutOrder_transactions_created_byTousersInput)
    update?: usersUpdateWithoutOrder_transactions_created_byTousersInput;
}
