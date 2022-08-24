import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { organizationCreateWithoutOrganization_updated_byTousersInput } from './organization-create-without-organization-updated-by-tousers.input';
import { Type } from 'class-transformer';
import { organizationCreateOrConnectWithoutOrganization_updated_byTousersInput } from './organization-create-or-connect-without-organization-updated-by-tousers.input';
import { organizationCreateManyOrganization_updated_byTousersInputEnvelope } from './organization-create-many-organization-updated-by-tousers-input-envelope.input';
import { organizationWhereUniqueInput } from './organization-where-unique.input';

@InputType()
export class organizationUncheckedCreateNestedManyWithoutOrganization_updated_byTousersInput {

    @Field(() => [organizationCreateWithoutOrganization_updated_byTousersInput], {nullable:true})
    @Type(() => organizationCreateWithoutOrganization_updated_byTousersInput)
    create?: Array<organizationCreateWithoutOrganization_updated_byTousersInput>;

    @Field(() => [organizationCreateOrConnectWithoutOrganization_updated_byTousersInput], {nullable:true})
    @Type(() => organizationCreateOrConnectWithoutOrganization_updated_byTousersInput)
    connectOrCreate?: Array<organizationCreateOrConnectWithoutOrganization_updated_byTousersInput>;

    @Field(() => organizationCreateManyOrganization_updated_byTousersInputEnvelope, {nullable:true})
    @Type(() => organizationCreateManyOrganization_updated_byTousersInputEnvelope)
    createMany?: organizationCreateManyOrganization_updated_byTousersInputEnvelope;

    @Field(() => [organizationWhereUniqueInput], {nullable:true})
    @Type(() => organizationWhereUniqueInput)
    connect?: Array<organizationWhereUniqueInput>;
}
