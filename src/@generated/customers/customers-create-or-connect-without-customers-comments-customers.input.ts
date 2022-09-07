import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { customersWhereUniqueInput } from './customers-where-unique.input';
import { Type } from 'class-transformer';
import { customersCreateWithoutCustomers_comments_customersInput } from './customers-create-without-customers-comments-customers.input';

@InputType()
export class customersCreateOrConnectWithoutCustomers_comments_customersInput {

    @Field(() => customersWhereUniqueInput, {nullable:false})
    @Type(() => customersWhereUniqueInput)
    where!: customersWhereUniqueInput;

    @Field(() => customersCreateWithoutCustomers_comments_customersInput, {nullable:false})
    @Type(() => customersCreateWithoutCustomers_comments_customersInput)
    create!: customersCreateWithoutCustomers_comments_customersInput;
}
