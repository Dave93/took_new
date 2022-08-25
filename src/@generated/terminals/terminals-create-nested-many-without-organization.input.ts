import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { terminalsCreateWithoutOrganizationInput } from './terminals-create-without-organization.input';
import { Type } from 'class-transformer';
import { terminalsCreateOrConnectWithoutOrganizationInput } from './terminals-create-or-connect-without-organization.input';
import { terminalsCreateManyOrganizationInputEnvelope } from './terminals-create-many-organization-input-envelope.input';
import { terminalsWhereUniqueInput } from './terminals-where-unique.input';

@InputType()
export class terminalsCreateNestedManyWithoutOrganizationInput {

    @Field(() => [terminalsCreateWithoutOrganizationInput], {nullable:true})
    @Type(() => terminalsCreateWithoutOrganizationInput)
    create?: Array<terminalsCreateWithoutOrganizationInput>;

    @Field(() => [terminalsCreateOrConnectWithoutOrganizationInput], {nullable:true})
    @Type(() => terminalsCreateOrConnectWithoutOrganizationInput)
    connectOrCreate?: Array<terminalsCreateOrConnectWithoutOrganizationInput>;

    @Field(() => terminalsCreateManyOrganizationInputEnvelope, {nullable:true})
    @Type(() => terminalsCreateManyOrganizationInputEnvelope)
    createMany?: terminalsCreateManyOrganizationInputEnvelope;

    @Field(() => [terminalsWhereUniqueInput], {nullable:true})
    @Type(() => terminalsWhereUniqueInput)
    connect?: Array<terminalsWhereUniqueInput>;
}
