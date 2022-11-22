import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UsersRelationFilter } from '../prisma/users-relation-filter.input';

@InputType()
export class outside_requestsWhereInput {

    @Field(() => [outside_requestsWhereInput], {nullable:true})
    AND?: Array<outside_requestsWhereInput>;

    @Field(() => [outside_requestsWhereInput], {nullable:true})
    OR?: Array<outside_requestsWhereInput>;

    @Field(() => [outside_requestsWhereInput], {nullable:true})
    NOT?: Array<outside_requestsWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    request_type?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    request_data?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    response_data?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    response_status?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    external_url?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    model_name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    model_id?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    created_by?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updated_at?: DateTimeFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    updated_by?: StringNullableFilter;

    @Field(() => UsersRelationFilter, {nullable:true})
    outside_requests_created_byTousers?: UsersRelationFilter;

    @Field(() => UsersRelationFilter, {nullable:true})
    outside_requests_updated_byTousers?: UsersRelationFilter;
}
