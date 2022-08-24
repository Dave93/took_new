import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { organizationUpdateOneRequiredWithoutWork_schedules_organization_idTorganizationNestedInput } from '../organization/organization-update-one-required-without-work-schedules-organization-id-torganization-nested.input';
import { usersUpdateOneWithoutWork_schedules_created_byTousersNestedInput } from '../users/users-update-one-without-work-schedules-created-by-tousers-nested.input';
import { usersUpdateOneWithoutWork_schedules_updated_byTousersNestedInput } from '../users/users-update-one-without-work-schedules-updated-by-tousers-nested.input';

@InputType()
export class work_schedulesUpdateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => organizationUpdateOneRequiredWithoutWork_schedules_organization_idTorganizationNestedInput, {nullable:true})
    organization?: organizationUpdateOneRequiredWithoutWork_schedules_organization_idTorganizationNestedInput;

    @Field(() => [String], {nullable:true})
    days?: Array<string>;

    @Field(() => Date, {nullable:true})
    start_time?: Date | string;

    @Field(() => Date, {nullable:true})
    end_time?: Date | string;

    @Field(() => Date, {nullable:true})
    max_start_time?: Date | string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => usersUpdateOneWithoutWork_schedules_created_byTousersNestedInput, {nullable:true})
    work_schedules_created_byTousers?: usersUpdateOneWithoutWork_schedules_created_byTousersNestedInput;

    @Field(() => usersUpdateOneWithoutWork_schedules_updated_byTousersNestedInput, {nullable:true})
    work_schedules_updated_byTousers?: usersUpdateOneWithoutWork_schedules_updated_byTousersNestedInput;
}
