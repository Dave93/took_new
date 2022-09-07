import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { customers_commentsWhereInput } from '../customers-comments/customers-comments-where.input';
import { Type } from 'class-transformer';
import { customers_commentsOrderByWithRelationInput } from '../customers-comments/customers-comments-order-by-with-relation.input';
import { customers_commentsWhereUniqueInput } from '../customers-comments/customers-comments-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Customers_commentsScalarFieldEnum } from './customers-comments-scalar-field.enum';

@ArgsType()
export class FindFirstcustomersCommentsArgs {

    @Field(() => customers_commentsWhereInput, {nullable:true})
    @Type(() => customers_commentsWhereInput)
    where?: customers_commentsWhereInput;

    @Field(() => [customers_commentsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<customers_commentsOrderByWithRelationInput>;

    @Field(() => customers_commentsWhereUniqueInput, {nullable:true})
    cursor?: customers_commentsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [Customers_commentsScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof Customers_commentsScalarFieldEnum>;
}
