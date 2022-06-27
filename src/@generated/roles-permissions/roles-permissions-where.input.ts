import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { UsersRelationFilter } from '../prisma/users-relation-filter.input';
import { PermissionsRelationFilter } from '../prisma/permissions-relation-filter.input';
import { RolesRelationFilter } from '../prisma/roles-relation-filter.input';

@InputType()
export class roles_permissionsWhereInput {

    @Field(() => [roles_permissionsWhereInput], {nullable:true})
    AND?: Array<roles_permissionsWhereInput>;

    @Field(() => [roles_permissionsWhereInput], {nullable:true})
    OR?: Array<roles_permissionsWhereInput>;

    @Field(() => [roles_permissionsWhereInput], {nullable:true})
    NOT?: Array<roles_permissionsWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    role_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    permission_id?: IntFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    created_by?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    updated_by?: StringNullableFilter;

    @Field(() => UsersRelationFilter, {nullable:true})
    users_roles_permissions_created_byTousers?: UsersRelationFilter;

    @Field(() => PermissionsRelationFilter, {nullable:true})
    permissions?: PermissionsRelationFilter;

    @Field(() => RolesRelationFilter, {nullable:true})
    roles?: RolesRelationFilter;

    @Field(() => UsersRelationFilter, {nullable:true})
    users_roles_permissions_updated_byTousers?: UsersRelationFilter;
}
