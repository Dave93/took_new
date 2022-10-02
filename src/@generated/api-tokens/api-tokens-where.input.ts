import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { UsersRelationFilter } from '../prisma/users-relation-filter.input';
import { OrganizationRelationFilter } from '../prisma/organization-relation-filter.input';

@InputType()
export class api_tokensWhereInput {

    @Field(() => [api_tokensWhereInput], {nullable:true})
    AND?: Array<api_tokensWhereInput>;

    @Field(() => [api_tokensWhereInput], {nullable:true})
    OR?: Array<api_tokensWhereInput>;

    @Field(() => [api_tokensWhereInput], {nullable:true})
    NOT?: Array<api_tokensWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    active?: BoolFilter;

    @Field(() => StringFilter, {nullable:true})
    token?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    organization_id?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updated_at?: DateTimeFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    created_by?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    updated_by?: StringNullableFilter;

    @Field(() => UsersRelationFilter, {nullable:true})
    api_tokens_created_byTousers?: UsersRelationFilter;

    @Field(() => UsersRelationFilter, {nullable:true})
    api_tokens_updated_byTousers?: UsersRelationFilter;

    @Field(() => OrganizationRelationFilter, {nullable:true})
    api_tokens_organization?: OrganizationRelationFilter;
}
