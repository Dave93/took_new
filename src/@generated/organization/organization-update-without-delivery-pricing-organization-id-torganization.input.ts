import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { organization_system_type } from './organization-system-type.enum';
import { work_schedulesUpdateManyWithoutOrganizationNestedInput } from '../work-schedules/work-schedules-update-many-without-organization-nested.input';
import { usersUpdateOneWithoutOrganization_created_byTousersNestedInput } from '../users/users-update-one-without-organization-created-by-tousers-nested.input';
import { usersUpdateOneWithoutOrganization_updated_byTousersNestedInput } from '../users/users-update-one-without-organization-updated-by-tousers-nested.input';
import { terminalsUpdateManyWithoutOrganizationNestedInput } from '../terminals/terminals-update-many-without-organization-nested.input';

@InputType()
export class organizationUpdateWithoutDelivery_pricing_organization_idTorganizationInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    external_id?: string;

    @Field(() => Boolean, {nullable:true})
    active?: boolean;

    @Field(() => organization_system_type, {nullable:true})
    system_type?: keyof typeof organization_system_type;

    @Field(() => String, {nullable:true})
    phone?: string;

    @Field(() => String, {nullable:true})
    iiko_login?: string;

    @Field(() => String, {nullable:true})
    webhook?: string;

    @Field(() => String, {nullable:true})
    group_id?: string;

    @Field(() => String, {nullable:true})
    apelsin_login?: string;

    @Field(() => String, {nullable:true})
    apelsin_password?: string;

    @Field(() => String, {nullable:true})
    sender_name?: string;

    @Field(() => String, {nullable:true})
    sender_number?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => work_schedulesUpdateManyWithoutOrganizationNestedInput, {nullable:true})
    work_schedules_organization_idTorganization?: work_schedulesUpdateManyWithoutOrganizationNestedInput;

    @Field(() => usersUpdateOneWithoutOrganization_created_byTousersNestedInput, {nullable:true})
    organization_created_byTousers?: usersUpdateOneWithoutOrganization_created_byTousersNestedInput;

    @Field(() => usersUpdateOneWithoutOrganization_updated_byTousersNestedInput, {nullable:true})
    organization_updated_byTousers?: usersUpdateOneWithoutOrganization_updated_byTousersNestedInput;

    @Field(() => terminalsUpdateManyWithoutOrganizationNestedInput, {nullable:true})
    terminals_organization_idTorganization?: terminalsUpdateManyWithoutOrganizationNestedInput;
}
