import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersUpdateWithoutOrder_transactions_created_byTousersInput } from './users-update-without-order-transactions-created-by-tousers.input';
import { Type } from 'class-transformer';
import { usersCreateWithoutOrder_transactions_created_byTousersInput } from './users-create-without-order-transactions-created-by-tousers.input';

@InputType()
export class usersUpsertWithoutOrder_transactions_created_byTousersInput {

    @Field(() => usersUpdateWithoutOrder_transactions_created_byTousersInput, {nullable:false})
    @Type(() => usersUpdateWithoutOrder_transactions_created_byTousersInput)
    update!: usersUpdateWithoutOrder_transactions_created_byTousersInput;

    @Field(() => usersCreateWithoutOrder_transactions_created_byTousersInput, {nullable:false})
    @Type(() => usersCreateWithoutOrder_transactions_created_byTousersInput)
    create!: usersCreateWithoutOrder_transactions_created_byTousersInput;
}
