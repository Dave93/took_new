import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { organizationCreateWithoutOrder_transactions_organizationsInput } from './organization-create-without-order-transactions-organizations.input';
import { Type } from 'class-transformer';
import { organizationCreateOrConnectWithoutOrder_transactions_organizationsInput } from './organization-create-or-connect-without-order-transactions-organizations.input';
import { organizationWhereUniqueInput } from './organization-where-unique.input';

@InputType()
export class organizationCreateNestedOneWithoutOrder_transactions_organizationsInput {

    @Field(() => organizationCreateWithoutOrder_transactions_organizationsInput, {nullable:true})
    @Type(() => organizationCreateWithoutOrder_transactions_organizationsInput)
    create?: organizationCreateWithoutOrder_transactions_organizationsInput;

    @Field(() => organizationCreateOrConnectWithoutOrder_transactions_organizationsInput, {nullable:true})
    @Type(() => organizationCreateOrConnectWithoutOrder_transactions_organizationsInput)
    connectOrCreate?: organizationCreateOrConnectWithoutOrder_transactions_organizationsInput;

    @Field(() => organizationWhereUniqueInput, {nullable:true})
    @Type(() => organizationWhereUniqueInput)
    connect?: organizationWhereUniqueInput;
}
