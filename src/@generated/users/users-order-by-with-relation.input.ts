import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { otpOrderByRelationAggregateInput } from '../otp/otp-order-by-relation-aggregate.input';
import { permissionsOrderByRelationAggregateInput } from '../permissions/permissions-order-by-relation-aggregate.input';
import { postOrderByRelationAggregateInput } from '../post/post-order-by-relation-aggregate.input';
import { rolesOrderByRelationAggregateInput } from '../roles/roles-order-by-relation-aggregate.input';
import { roles_permissionsOrderByRelationAggregateInput } from '../roles-permissions/roles-permissions-order-by-relation-aggregate.input';
import { users_permissionsOrderByRelationAggregateInput } from '../users-permissions/users-permissions-order-by-relation-aggregate.input';
import { users_rolesOrderByRelationAggregateInput } from '../users-roles/users-roles-order-by-relation-aggregate.input';
import { post_prop_typesOrderByRelationAggregateInput } from '../post-prop-types/post-prop-types-order-by-relation-aggregate.input';
import { delivery_pricingOrderByRelationAggregateInput } from '../delivery-pricing/delivery-pricing-order-by-relation-aggregate.input';
import { cityOrderByRelationAggregateInput } from '../city/city-order-by-relation-aggregate.input';
import { organizationOrderByRelationAggregateInput } from '../organization/organization-order-by-relation-aggregate.input';
import { work_schedulesOrderByRelationAggregateInput } from '../work-schedules/work-schedules-order-by-relation-aggregate.input';

@InputType()
export class usersOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    phone?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    first_name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    last_name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    is_super_user?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: keyof typeof SortOrder;

    @Field(() => otpOrderByRelationAggregateInput, {nullable:true})
    otp?: otpOrderByRelationAggregateInput;

    @Field(() => permissionsOrderByRelationAggregateInput, {nullable:true})
    permissions_permissions_created_byTousers?: permissionsOrderByRelationAggregateInput;

    @Field(() => permissionsOrderByRelationAggregateInput, {nullable:true})
    permissions_permissions_updated_byTousers?: permissionsOrderByRelationAggregateInput;

    @Field(() => postOrderByRelationAggregateInput, {nullable:true})
    post_post_created_byTousers?: postOrderByRelationAggregateInput;

    @Field(() => postOrderByRelationAggregateInput, {nullable:true})
    post_updated_byTousers?: postOrderByRelationAggregateInput;

    @Field(() => postOrderByRelationAggregateInput, {nullable:true})
    post_post_user_idTousers?: postOrderByRelationAggregateInput;

    @Field(() => rolesOrderByRelationAggregateInput, {nullable:true})
    roles_roles_created_byTousers?: rolesOrderByRelationAggregateInput;

    @Field(() => rolesOrderByRelationAggregateInput, {nullable:true})
    roles_roles_updated_byTousers?: rolesOrderByRelationAggregateInput;

    @Field(() => roles_permissionsOrderByRelationAggregateInput, {nullable:true})
    roles_permissions_roles_permissions_created_byTousers?: roles_permissionsOrderByRelationAggregateInput;

    @Field(() => roles_permissionsOrderByRelationAggregateInput, {nullable:true})
    roles_permissions_roles_permissions_updated_byTousers?: roles_permissionsOrderByRelationAggregateInput;

    @Field(() => users_permissionsOrderByRelationAggregateInput, {nullable:true})
    users_permissions_usersTousers_permissions_created_by?: users_permissionsOrderByRelationAggregateInput;

    @Field(() => users_permissionsOrderByRelationAggregateInput, {nullable:true})
    users_permissions_usersTousers_permissions_updated_by?: users_permissionsOrderByRelationAggregateInput;

    @Field(() => users_permissionsOrderByRelationAggregateInput, {nullable:true})
    users_permissions_usersTousers_permissions_user_id?: users_permissionsOrderByRelationAggregateInput;

    @Field(() => users_rolesOrderByRelationAggregateInput, {nullable:true})
    users_roles_usersTousers_roles_created_by?: users_rolesOrderByRelationAggregateInput;

    @Field(() => users_rolesOrderByRelationAggregateInput, {nullable:true})
    users_roles_usersTousers_roles_updated_by?: users_rolesOrderByRelationAggregateInput;

    @Field(() => users_rolesOrderByRelationAggregateInput, {nullable:true})
    users_roles_usersTousers_roles_user_id?: users_rolesOrderByRelationAggregateInput;

    @Field(() => post_prop_typesOrderByRelationAggregateInput, {nullable:true})
    post_prop_types_created_byTousers?: post_prop_typesOrderByRelationAggregateInput;

    @Field(() => post_prop_typesOrderByRelationAggregateInput, {nullable:true})
    post_prop_types_updated_byTousers?: post_prop_typesOrderByRelationAggregateInput;

    @Field(() => delivery_pricingOrderByRelationAggregateInput, {nullable:true})
    delivery_pricing_created_byTousers?: delivery_pricingOrderByRelationAggregateInput;

    @Field(() => delivery_pricingOrderByRelationAggregateInput, {nullable:true})
    delivery_pricing_updated_byTousers?: delivery_pricingOrderByRelationAggregateInput;

    @Field(() => cityOrderByRelationAggregateInput, {nullable:true})
    city_created_byTousers?: cityOrderByRelationAggregateInput;

    @Field(() => cityOrderByRelationAggregateInput, {nullable:true})
    city_updated_byTousers?: cityOrderByRelationAggregateInput;

    @Field(() => organizationOrderByRelationAggregateInput, {nullable:true})
    organization_created_byTousers?: organizationOrderByRelationAggregateInput;

    @Field(() => organizationOrderByRelationAggregateInput, {nullable:true})
    organization_updated_byTousers?: organizationOrderByRelationAggregateInput;

    @Field(() => work_schedulesOrderByRelationAggregateInput, {nullable:true})
    work_schedules_created_byTousers?: work_schedulesOrderByRelationAggregateInput;

    @Field(() => work_schedulesOrderByRelationAggregateInput, {nullable:true})
    work_schedules_updated_byTousers?: work_schedulesOrderByRelationAggregateInput;

    @Field(() => delivery_pricingOrderByRelationAggregateInput, {nullable:true})
    delivery_pricing_organization_idTousers?: delivery_pricingOrderByRelationAggregateInput;
}
