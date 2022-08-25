import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { organization_system_type } from './organization-system-type.enum';
import { work_schedulesUncheckedUpdateManyWithoutOrganizationNestedInput } from '../work-schedules/work-schedules-unchecked-update-many-without-organization-nested.input';
import { terminalsUncheckedUpdateManyWithoutOrganizationNestedInput } from '../terminals/terminals-unchecked-update-many-without-organization-nested.input';

@InputType()
export class organizationUncheckedUpdateWithoutDelivery_pricing_organization_idTorganizationInput {

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

    @Field(() => String, {nullable:true})
    created_by?: string;

    @Field(() => String, {nullable:true})
    updated_by?: string;

    @Field(() => work_schedulesUncheckedUpdateManyWithoutOrganizationNestedInput, {nullable:true})
    work_schedules_organization_idTorganization?: work_schedulesUncheckedUpdateManyWithoutOrganizationNestedInput;

    @Field(() => terminalsUncheckedUpdateManyWithoutOrganizationNestedInput, {nullable:true})
    terminals_organization_idTorganization?: terminalsUncheckedUpdateManyWithoutOrganizationNestedInput;
}
