import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { Enumsale_typeFilter } from '../prisma/enumsale-type-filter.input';
import { EnumtypeFilter } from '../prisma/enumtype-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { UsersRelationFilter } from '../prisma/users-relation-filter.input';

@InputType()
export class post_prop_typesWhereInput {

    @Field(() => [post_prop_typesWhereInput], {nullable:true})
    AND?: Array<post_prop_typesWhereInput>;

    @Field(() => [post_prop_typesWhereInput], {nullable:true})
    OR?: Array<post_prop_typesWhereInput>;

    @Field(() => [post_prop_typesWhereInput], {nullable:true})
    NOT?: Array<post_prop_typesWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => Enumsale_typeFilter, {nullable:true})
    sale_type?: Enumsale_typeFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => EnumtypeFilter, {nullable:true})
    type?: EnumtypeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updated_at?: DateTimeFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    created_by?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    updated_by?: StringNullableFilter;

    @Field(() => UsersRelationFilter, {nullable:true})
    users_post_prop_types_created_byTousers?: UsersRelationFilter;

    @Field(() => UsersRelationFilter, {nullable:true})
    users_post_prop_types_updated_byTousers?: UsersRelationFilter;
}
