import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { customers_commentsWhereUniqueInput } from './customers-comments-where-unique.input';
import { Type } from 'class-transformer';
import { customers_commentsUpdateWithoutCustomers_comments_customersInput } from './customers-comments-update-without-customers-comments-customers.input';

@InputType()
export class customers_commentsUpdateWithWhereUniqueWithoutCustomers_comments_customersInput {

    @Field(() => customers_commentsWhereUniqueInput, {nullable:false})
    @Type(() => customers_commentsWhereUniqueInput)
    where!: customers_commentsWhereUniqueInput;

    @Field(() => customers_commentsUpdateWithoutCustomers_comments_customersInput, {nullable:false})
    @Type(() => customers_commentsUpdateWithoutCustomers_comments_customersInput)
    data!: customers_commentsUpdateWithoutCustomers_comments_customersInput;
}
