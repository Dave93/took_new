import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { Customers_commentsListRelationFilter } from '../prisma/customers-comments-list-relation-filter.input';

@InputType()
export class customersWhereInput {

    @Field(() => [customersWhereInput], {nullable:true})
    AND?: Array<customersWhereInput>;

    @Field(() => [customersWhereInput], {nullable:true})
    OR?: Array<customersWhereInput>;

    @Field(() => [customersWhereInput], {nullable:true})
    NOT?: Array<customersWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    phone?: StringFilter;

    @Field(() => Customers_commentsListRelationFilter, {nullable:true})
    customers_comments_customers?: Customers_commentsListRelationFilter;
}
