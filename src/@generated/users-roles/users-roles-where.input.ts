import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { UsersRelationFilter } from '../prisma/users-relation-filter.input';
import { RolesRelationFilter } from '../prisma/roles-relation-filter.input';

@InputType()
export class users_rolesWhereInput {

    @Field(() => [users_rolesWhereInput], {nullable:true})
    AND?: Array<users_rolesWhereInput>;

    @Field(() => [users_rolesWhereInput], {nullable:true})
    OR?: Array<users_rolesWhereInput>;

    @Field(() => [users_rolesWhereInput], {nullable:true})
    NOT?: Array<users_rolesWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    user_id?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    role_id?: IntFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    created_by?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    updated_by?: StringNullableFilter;

    @Field(() => UsersRelationFilter, {nullable:true})
    users_usersTousers_roles_created_by?: UsersRelationFilter;

    @Field(() => RolesRelationFilter, {nullable:true})
    roles?: RolesRelationFilter;

    @Field(() => UsersRelationFilter, {nullable:true})
    users_usersTousers_roles_updated_by?: UsersRelationFilter;

    @Field(() => UsersRelationFilter, {nullable:true})
    users_usersTousers_roles_user_id?: UsersRelationFilter;
}
