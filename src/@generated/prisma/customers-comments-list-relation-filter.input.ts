import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { customers_commentsWhereInput } from '../customers-comments/customers-comments-where.input';

@InputType()
export class Customers_commentsListRelationFilter {

    @Field(() => customers_commentsWhereInput, {nullable:true})
    every?: customers_commentsWhereInput;

    @Field(() => customers_commentsWhereInput, {nullable:true})
    some?: customers_commentsWhereInput;

    @Field(() => customers_commentsWhereInput, {nullable:true})
    none?: customers_commentsWhereInput;
}
