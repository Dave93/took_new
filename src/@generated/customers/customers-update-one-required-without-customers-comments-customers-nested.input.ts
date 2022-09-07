import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { customersCreateWithoutCustomers_comments_customersInput } from './customers-create-without-customers-comments-customers.input';
import { Type } from 'class-transformer';
import { customersCreateOrConnectWithoutCustomers_comments_customersInput } from './customers-create-or-connect-without-customers-comments-customers.input';
import { customersUpsertWithoutCustomers_comments_customersInput } from './customers-upsert-without-customers-comments-customers.input';
import { customersWhereUniqueInput } from './customers-where-unique.input';
import { customersUpdateWithoutCustomers_comments_customersInput } from './customers-update-without-customers-comments-customers.input';

@InputType()
export class customersUpdateOneRequiredWithoutCustomers_comments_customersNestedInput {

    @Field(() => customersCreateWithoutCustomers_comments_customersInput, {nullable:true})
    @Type(() => customersCreateWithoutCustomers_comments_customersInput)
    create?: customersCreateWithoutCustomers_comments_customersInput;

    @Field(() => customersCreateOrConnectWithoutCustomers_comments_customersInput, {nullable:true})
    @Type(() => customersCreateOrConnectWithoutCustomers_comments_customersInput)
    connectOrCreate?: customersCreateOrConnectWithoutCustomers_comments_customersInput;

    @Field(() => customersUpsertWithoutCustomers_comments_customersInput, {nullable:true})
    @Type(() => customersUpsertWithoutCustomers_comments_customersInput)
    upsert?: customersUpsertWithoutCustomers_comments_customersInput;

    @Field(() => customersWhereUniqueInput, {nullable:true})
    @Type(() => customersWhereUniqueInput)
    connect?: customersWhereUniqueInput;

    @Field(() => customersUpdateWithoutCustomers_comments_customersInput, {nullable:true})
    @Type(() => customersUpdateWithoutCustomers_comments_customersInput)
    update?: customersUpdateWithoutCustomers_comments_customersInput;
}
