import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class UsersCount {

    @Field(() => Int, {nullable:false})
    otp!: number;

    @Field(() => Int, {nullable:false})
    permissions_permissions_created_byTousers!: number;

    @Field(() => Int, {nullable:false})
    permissions_permissions_updated_byTousers!: number;

    @Field(() => Int, {nullable:false})
    post_post_created_byTousers!: number;

    @Field(() => Int, {nullable:false})
    post_updated_byTousers!: number;

    @Field(() => Int, {nullable:false})
    post_post_user_idTousers!: number;

    @Field(() => Int, {nullable:false})
    roles_roles_created_byTousers!: number;

    @Field(() => Int, {nullable:false})
    roles_roles_updated_byTousers!: number;

    @Field(() => Int, {nullable:false})
    roles_permissions_roles_permissions_created_byTousers!: number;

    @Field(() => Int, {nullable:false})
    roles_permissions_roles_permissions_updated_byTousers!: number;

    @Field(() => Int, {nullable:false})
    users_permissions_usersTousers_permissions_created_by!: number;

    @Field(() => Int, {nullable:false})
    users_permissions_usersTousers_permissions_updated_by!: number;

    @Field(() => Int, {nullable:false})
    users_permissions_usersTousers_permissions_user_id!: number;

    @Field(() => Int, {nullable:false})
    users_roles_usersTousers_roles_created_by!: number;

    @Field(() => Int, {nullable:false})
    users_roles_usersTousers_roles_updated_by!: number;

    @Field(() => Int, {nullable:false})
    users_roles_usersTousers_roles_user_id!: number;

    @Field(() => Int, {nullable:false})
    post_prop_types_created_byTousers!: number;

    @Field(() => Int, {nullable:false})
    post_prop_types_updated_byTousers!: number;

    @Field(() => Int, {nullable:false})
    delivery_pricing_created_byTousers!: number;

    @Field(() => Int, {nullable:false})
    delivery_pricing_updated_byTousers!: number;

    @Field(() => Int, {nullable:false})
    city_created_byTousers!: number;

    @Field(() => Int, {nullable:false})
    city_updated_byTousers!: number;

    @Field(() => Int, {nullable:false})
    organization_created_byTousers!: number;

    @Field(() => Int, {nullable:false})
    organization_updated_byTousers!: number;

    @Field(() => Int, {nullable:false})
    work_schedules_created_byTousers!: number;

    @Field(() => Int, {nullable:false})
    work_schedules_updated_byTousers!: number;

    @Field(() => Int, {nullable:false})
    terminals_created_byTousers!: number;

    @Field(() => Int, {nullable:false})
    terminals_updated_byTousers!: number;

    @Field(() => Int, {nullable:false})
    users_terminals!: number;

    @Field(() => Int, {nullable:false})
    users_work_schedules!: number;

    @Field(() => Int, {nullable:false})
    work_schedule_entries_created_byTousers!: number;

    @Field(() => Int, {nullable:false})
    work_schedule_entries_updated_byTousers!: number;

    @Field(() => Int, {nullable:false})
    work_schedule_entries_users!: number;
}
