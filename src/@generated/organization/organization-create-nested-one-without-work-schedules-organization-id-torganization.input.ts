import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { organizationCreateWithoutWork_schedules_organization_idTorganizationInput } from './organization-create-without-work-schedules-organization-id-torganization.input';
import { Type } from 'class-transformer';
import { organizationCreateOrConnectWithoutWork_schedules_organization_idTorganizationInput } from './organization-create-or-connect-without-work-schedules-organization-id-torganization.input';
import { organizationWhereUniqueInput } from './organization-where-unique.input';

@InputType()
export class organizationCreateNestedOneWithoutWork_schedules_organization_idTorganizationInput {

    @Field(() => organizationCreateWithoutWork_schedules_organization_idTorganizationInput, {nullable:true})
    @Type(() => organizationCreateWithoutWork_schedules_organization_idTorganizationInput)
    create?: organizationCreateWithoutWork_schedules_organization_idTorganizationInput;

    @Field(() => organizationCreateOrConnectWithoutWork_schedules_organization_idTorganizationInput, {nullable:true})
    @Type(() => organizationCreateOrConnectWithoutWork_schedules_organization_idTorganizationInput)
    connectOrCreate?: organizationCreateOrConnectWithoutWork_schedules_organization_idTorganizationInput;

    @Field(() => organizationWhereUniqueInput, {nullable:true})
    @Type(() => organizationWhereUniqueInput)
    connect?: organizationWhereUniqueInput;
}
