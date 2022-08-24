import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { organizationUpdateWithoutWork_schedules_organization_idTorganizationInput } from './organization-update-without-work-schedules-organization-id-torganization.input';
import { Type } from 'class-transformer';
import { organizationCreateWithoutWork_schedules_organization_idTorganizationInput } from './organization-create-without-work-schedules-organization-id-torganization.input';

@InputType()
export class organizationUpsertWithoutWork_schedules_organization_idTorganizationInput {

    @Field(() => organizationUpdateWithoutWork_schedules_organization_idTorganizationInput, {nullable:false})
    @Type(() => organizationUpdateWithoutWork_schedules_organization_idTorganizationInput)
    update!: organizationUpdateWithoutWork_schedules_organization_idTorganizationInput;

    @Field(() => organizationCreateWithoutWork_schedules_organization_idTorganizationInput, {nullable:false})
    @Type(() => organizationCreateWithoutWork_schedules_organization_idTorganizationInput)
    create!: organizationCreateWithoutWork_schedules_organization_idTorganizationInput;
}
