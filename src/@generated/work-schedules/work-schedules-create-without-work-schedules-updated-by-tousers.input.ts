import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { organizationCreateNestedOneWithoutWork_schedules_organization_idTorganizationInput } from '../organization/organization-create-nested-one-without-work-schedules-organization-id-torganization.input';
import { usersCreateNestedOneWithoutWork_schedules_created_byTousersInput } from '../users/users-create-nested-one-without-work-schedules-created-by-tousers.input';

@InputType()
export class work_schedulesCreateWithoutWork_schedules_updated_byTousersInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Boolean, {nullable:true})
    active?: boolean;

    @Field(() => organizationCreateNestedOneWithoutWork_schedules_organization_idTorganizationInput, {nullable:false})
    organization!: organizationCreateNestedOneWithoutWork_schedules_organization_idTorganizationInput;

    @Field(() => [String], {nullable:true})
    days?: Array<string>;

    @Field(() => Date, {nullable:false})
    start_time!: Date | string;

    @Field(() => Date, {nullable:false})
    end_time!: Date | string;

    @Field(() => Date, {nullable:false})
    max_start_time!: Date | string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => usersCreateNestedOneWithoutWork_schedules_created_byTousersInput, {nullable:true})
    work_schedules_created_byTousers?: usersCreateNestedOneWithoutWork_schedules_created_byTousersInput;
}
