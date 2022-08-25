import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { Enumuser_statusFilter } from '../prisma/enumuser-status-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { OtpListRelationFilter } from '../prisma/otp-list-relation-filter.input';
import { PermissionsListRelationFilter } from '../prisma/permissions-list-relation-filter.input';
import { PostListRelationFilter } from '../prisma/post-list-relation-filter.input';
import { RolesListRelationFilter } from '../prisma/roles-list-relation-filter.input';
import { Roles_permissionsListRelationFilter } from '../prisma/roles-permissions-list-relation-filter.input';
import { Users_permissionsListRelationFilter } from '../prisma/users-permissions-list-relation-filter.input';
import { Users_rolesListRelationFilter } from '../prisma/users-roles-list-relation-filter.input';
import { Post_prop_typesListRelationFilter } from '../prisma/post-prop-types-list-relation-filter.input';
import { Delivery_pricingListRelationFilter } from '../prisma/delivery-pricing-list-relation-filter.input';
import { CityListRelationFilter } from '../prisma/city-list-relation-filter.input';
import { OrganizationListRelationFilter } from '../prisma/organization-list-relation-filter.input';
import { Work_schedulesListRelationFilter } from '../prisma/work-schedules-list-relation-filter.input';
import { TerminalsListRelationFilter } from '../prisma/terminals-list-relation-filter.input';

@InputType()
export class usersWhereInput {

    @Field(() => [usersWhereInput], {nullable:true})
    AND?: Array<usersWhereInput>;

    @Field(() => [usersWhereInput], {nullable:true})
    OR?: Array<usersWhereInput>;

    @Field(() => [usersWhereInput], {nullable:true})
    NOT?: Array<usersWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    phone?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    first_name?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    last_name?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    password?: StringNullableFilter;

    @Field(() => BoolFilter, {nullable:true})
    is_super_user?: BoolFilter;

    @Field(() => Enumuser_statusFilter, {nullable:true})
    status?: Enumuser_statusFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updated_at?: DateTimeFilter;

    @Field(() => OtpListRelationFilter, {nullable:true})
    otp?: OtpListRelationFilter;

    @Field(() => PermissionsListRelationFilter, {nullable:true})
    permissions_permissions_created_byTousers?: PermissionsListRelationFilter;

    @Field(() => PermissionsListRelationFilter, {nullable:true})
    permissions_permissions_updated_byTousers?: PermissionsListRelationFilter;

    @Field(() => PostListRelationFilter, {nullable:true})
    post_post_created_byTousers?: PostListRelationFilter;

    @Field(() => PostListRelationFilter, {nullable:true})
    post_updated_byTousers?: PostListRelationFilter;

    @Field(() => PostListRelationFilter, {nullable:true})
    post_post_user_idTousers?: PostListRelationFilter;

    @Field(() => RolesListRelationFilter, {nullable:true})
    roles_roles_created_byTousers?: RolesListRelationFilter;

    @Field(() => RolesListRelationFilter, {nullable:true})
    roles_roles_updated_byTousers?: RolesListRelationFilter;

    @Field(() => Roles_permissionsListRelationFilter, {nullable:true})
    roles_permissions_roles_permissions_created_byTousers?: Roles_permissionsListRelationFilter;

    @Field(() => Roles_permissionsListRelationFilter, {nullable:true})
    roles_permissions_roles_permissions_updated_byTousers?: Roles_permissionsListRelationFilter;

    @Field(() => Users_permissionsListRelationFilter, {nullable:true})
    users_permissions_usersTousers_permissions_created_by?: Users_permissionsListRelationFilter;

    @Field(() => Users_permissionsListRelationFilter, {nullable:true})
    users_permissions_usersTousers_permissions_updated_by?: Users_permissionsListRelationFilter;

    @Field(() => Users_permissionsListRelationFilter, {nullable:true})
    users_permissions_usersTousers_permissions_user_id?: Users_permissionsListRelationFilter;

    @Field(() => Users_rolesListRelationFilter, {nullable:true})
    users_roles_usersTousers_roles_created_by?: Users_rolesListRelationFilter;

    @Field(() => Users_rolesListRelationFilter, {nullable:true})
    users_roles_usersTousers_roles_updated_by?: Users_rolesListRelationFilter;

    @Field(() => Users_rolesListRelationFilter, {nullable:true})
    users_roles_usersTousers_roles_user_id?: Users_rolesListRelationFilter;

    @Field(() => Post_prop_typesListRelationFilter, {nullable:true})
    post_prop_types_created_byTousers?: Post_prop_typesListRelationFilter;

    @Field(() => Post_prop_typesListRelationFilter, {nullable:true})
    post_prop_types_updated_byTousers?: Post_prop_typesListRelationFilter;

    @Field(() => Delivery_pricingListRelationFilter, {nullable:true})
    delivery_pricing_created_byTousers?: Delivery_pricingListRelationFilter;

    @Field(() => Delivery_pricingListRelationFilter, {nullable:true})
    delivery_pricing_updated_byTousers?: Delivery_pricingListRelationFilter;

    @Field(() => CityListRelationFilter, {nullable:true})
    city_created_byTousers?: CityListRelationFilter;

    @Field(() => CityListRelationFilter, {nullable:true})
    city_updated_byTousers?: CityListRelationFilter;

    @Field(() => OrganizationListRelationFilter, {nullable:true})
    organization_created_byTousers?: OrganizationListRelationFilter;

    @Field(() => OrganizationListRelationFilter, {nullable:true})
    organization_updated_byTousers?: OrganizationListRelationFilter;

    @Field(() => Work_schedulesListRelationFilter, {nullable:true})
    work_schedules_created_byTousers?: Work_schedulesListRelationFilter;

    @Field(() => Work_schedulesListRelationFilter, {nullable:true})
    work_schedules_updated_byTousers?: Work_schedulesListRelationFilter;

    @Field(() => TerminalsListRelationFilter, {nullable:true})
    terminals_created_byTousers?: TerminalsListRelationFilter;

    @Field(() => TerminalsListRelationFilter, {nullable:true})
    terminals_updated_byTousers?: TerminalsListRelationFilter;
}
