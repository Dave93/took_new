import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { customersCreateWithoutCustomers_comments_customersInput } from './customers-create-without-customers-comments-customers.input';
import { Type } from 'class-transformer';
import { customersCreateOrConnectWithoutCustomers_comments_customersInput } from './customers-create-or-connect-without-customers-comments-customers.input';
import { customersWhereUniqueInput } from './customers-where-unique.input';

@InputType()
export class customersCreateNestedOneWithoutCustomers_comments_customersInput {

    @Field(() => customersCreateWithoutCustomers_comments_customersInput, {nullable:true})
    @Type(() => customersCreateWithoutCustomers_comments_customersInput)
    create?: customersCreateWithoutCustomers_comments_customersInput;

    @Field(() => customersCreateOrConnectWithoutCustomers_comments_customersInput, {nullable:true})
    @Type(() => customersCreateOrConnectWithoutCustomers_comments_customersInput)
    connectOrCreate?: customersCreateOrConnectWithoutCustomers_comments_customersInput;

    @Field(() => customersWhereUniqueInput, {nullable:true})
    @Type(() => customersWhereUniqueInput)
    connect?: customersWhereUniqueInput;
}
