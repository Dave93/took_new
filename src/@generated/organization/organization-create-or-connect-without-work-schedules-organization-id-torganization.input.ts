import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { organizationWhereUniqueInput } from './organization-where-unique.input';
import { Type } from 'class-transformer';
import { organizationCreateWithoutWork_schedules_organization_idTorganizationInput } from './organization-create-without-work-schedules-organization-id-torganization.input';

@InputType()
export class organizationCreateOrConnectWithoutWork_schedules_organization_idTorganizationInput {

    @Field(() => organizationWhereUniqueInput, {nullable:false})
    @Type(() => organizationWhereUniqueInput)
    where!: organizationWhereUniqueInput;

    @Field(() => organizationCreateWithoutWork_schedules_organization_idTorganizationInput, {nullable:false})
    @Type(() => organizationCreateWithoutWork_schedules_organization_idTorganizationInput)
    create!: organizationCreateWithoutWork_schedules_organization_idTorganizationInput;
}
