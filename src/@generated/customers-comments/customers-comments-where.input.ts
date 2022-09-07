import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { UsersRelationFilter } from '../prisma/users-relation-filter.input';
import { CustomersRelationFilter } from '../prisma/customers-relation-filter.input';

@InputType()
export class customers_commentsWhereInput {

    @Field(() => [customers_commentsWhereInput], {nullable:true})
    AND?: Array<customers_commentsWhereInput>;

    @Field(() => [customers_commentsWhereInput], {nullable:true})
    OR?: Array<customers_commentsWhereInput>;

    @Field(() => [customers_commentsWhereInput], {nullable:true})
    NOT?: Array<customers_commentsWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    customer_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    comment?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    created_by?: StringNullableFilter;

    @Field(() => UsersRelationFilter, {nullable:true})
    customers_comments_created_byTousers?: UsersRelationFilter;

    @Field(() => CustomersRelationFilter, {nullable:true})
    customers_comments_customers?: CustomersRelationFilter;
}
