import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { UsersRelationFilter } from '../prisma/users-relation-filter.input';
import { PermissionsRelationFilter } from '../prisma/permissions-relation-filter.input';

@InputType()
export class users_permissionsWhereInput {

    @Field(() => [users_permissionsWhereInput], {nullable:true})
    AND?: Array<users_permissionsWhereInput>;

    @Field(() => [users_permissionsWhereInput], {nullable:true})
    OR?: Array<users_permissionsWhereInput>;

    @Field(() => [users_permissionsWhereInput], {nullable:true})
    NOT?: Array<users_permissionsWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    user_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    permission_id?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    created_by?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    updated_by?: StringNullableFilter;

    @Field(() => UsersRelationFilter, {nullable:true})
    users_usersTousers_permissions_created_by?: UsersRelationFilter;

    @Field(() => PermissionsRelationFilter, {nullable:true})
    permissions?: PermissionsRelationFilter;

    @Field(() => UsersRelationFilter, {nullable:true})
    users_usersTousers_permissions_updated_by?: UsersRelationFilter;

    @Field(() => UsersRelationFilter, {nullable:true})
    users_usersTousers_permissions_user_id?: UsersRelationFilter;
}
