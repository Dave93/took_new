import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { UsersRelationFilter } from '../prisma/users-relation-filter.input';
import { Roles_permissionsListRelationFilter } from '../prisma/roles-permissions-list-relation-filter.input';
import { Users_permissionsListRelationFilter } from '../prisma/users-permissions-list-relation-filter.input';

@InputType()
export class permissionsWhereInput {

    @Field(() => [permissionsWhereInput], {nullable:true})
    AND?: Array<permissionsWhereInput>;

    @Field(() => [permissionsWhereInput], {nullable:true})
    OR?: Array<permissionsWhereInput>;

    @Field(() => [permissionsWhereInput], {nullable:true})
    NOT?: Array<permissionsWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    slug?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    active?: BoolFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updated_at?: DateTimeFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    created_by?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    updated_by?: StringNullableFilter;

    @Field(() => UsersRelationFilter, {nullable:true})
    users_permissions_created_byTousers?: UsersRelationFilter;

    @Field(() => UsersRelationFilter, {nullable:true})
    users_permissions_updated_byTousers?: UsersRelationFilter;

    @Field(() => Roles_permissionsListRelationFilter, {nullable:true})
    roles_permissions?: Roles_permissionsListRelationFilter;

    @Field(() => Users_permissionsListRelationFilter, {nullable:true})
    users_permissions?: Users_permissionsListRelationFilter;
}
