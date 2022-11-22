import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { organizationWhereUniqueInput } from './organization-where-unique.input';
import { Type } from 'class-transformer';
import { organizationCreateWithoutOrder_transactions_organizationsInput } from './organization-create-without-order-transactions-organizations.input';

@InputType()
export class organizationCreateOrConnectWithoutOrder_transactions_organizationsInput {

    @Field(() => organizationWhereUniqueInput, {nullable:false})
    @Type(() => organizationWhereUniqueInput)
    where!: organizationWhereUniqueInput;

    @Field(() => organizationCreateWithoutOrder_transactions_organizationsInput, {nullable:false})
    @Type(() => organizationCreateWithoutOrder_transactions_organizationsInput)
    create!: organizationCreateWithoutOrder_transactions_organizationsInput;
}
