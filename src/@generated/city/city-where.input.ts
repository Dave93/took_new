import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UsersRelationFilter } from '../prisma/users-relation-filter.input';
import { CityRelationFilter } from '../prisma/city-relation-filter.input';
import { PostListRelationFilter } from '../prisma/post-list-relation-filter.input';
import { CityListRelationFilter } from '../prisma/city-list-relation-filter.input';

@InputType()
export class cityWhereInput {

    @Field(() => [cityWhereInput], {nullable:true})
    AND?: Array<cityWhereInput>;

    @Field(() => [cityWhereInput], {nullable:true})
    OR?: Array<cityWhereInput>;

    @Field(() => [cityWhereInput], {nullable:true})
    NOT?: Array<cityWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    parent_id?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updated_at?: DateTimeFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    created_by?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    updated_by?: StringNullableFilter;

    @Field(() => UsersRelationFilter, {nullable:true})
    users_city_created_byTousers?: UsersRelationFilter;

    @Field(() => UsersRelationFilter, {nullable:true})
    users_city_updated_byTousers?: UsersRelationFilter;

    @Field(() => CityRelationFilter, {nullable:true})
    users_city_parent_idTousers?: CityRelationFilter;

    @Field(() => PostListRelationFilter, {nullable:true})
    post_city_idTocity?: PostListRelationFilter;

    @Field(() => CityListRelationFilter, {nullable:true})
    city_parent_idTocity?: CityListRelationFilter;
}
