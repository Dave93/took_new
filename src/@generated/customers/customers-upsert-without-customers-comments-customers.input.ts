import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { customersUpdateWithoutCustomers_comments_customersInput } from './customers-update-without-customers-comments-customers.input';
import { Type } from 'class-transformer';
import { customersCreateWithoutCustomers_comments_customersInput } from './customers-create-without-customers-comments-customers.input';

@InputType()
export class customersUpsertWithoutCustomers_comments_customersInput {

    @Field(() => customersUpdateWithoutCustomers_comments_customersInput, {nullable:false})
    @Type(() => customersUpdateWithoutCustomers_comments_customersInput)
    update!: customersUpdateWithoutCustomers_comments_customersInput;

    @Field(() => customersCreateWithoutCustomers_comments_customersInput, {nullable:false})
    @Type(() => customersCreateWithoutCustomers_comments_customersInput)
    create!: customersCreateWithoutCustomers_comments_customersInput;
}
