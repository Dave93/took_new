import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { organizationCreateWithoutOrganization_created_byTousersInput } from './organization-create-without-organization-created-by-tousers.input';
import { Type } from 'class-transformer';
import { organizationCreateOrConnectWithoutOrganization_created_byTousersInput } from './organization-create-or-connect-without-organization-created-by-tousers.input';
import { organizationCreateManyOrganization_created_byTousersInputEnvelope } from './organization-create-many-organization-created-by-tousers-input-envelope.input';
import { organizationWhereUniqueInput } from './organization-where-unique.input';

@InputType()
export class organizationCreateNestedManyWithoutOrganization_created_byTousersInput {

    @Field(() => [organizationCreateWithoutOrganization_created_byTousersInput], {nullable:true})
    @Type(() => organizationCreateWithoutOrganization_created_byTousersInput)
    create?: Array<organizationCreateWithoutOrganization_created_byTousersInput>;

    @Field(() => [organizationCreateOrConnectWithoutOrganization_created_byTousersInput], {nullable:true})
    @Type(() => organizationCreateOrConnectWithoutOrganization_created_byTousersInput)
    connectOrCreate?: Array<organizationCreateOrConnectWithoutOrganization_created_byTousersInput>;

    @Field(() => organizationCreateManyOrganization_created_byTousersInputEnvelope, {nullable:true})
    @Type(() => organizationCreateManyOrganization_created_byTousersInputEnvelope)
    createMany?: organizationCreateManyOrganization_created_byTousersInputEnvelope;

    @Field(() => [organizationWhereUniqueInput], {nullable:true})
    @Type(() => organizationWhereUniqueInput)
    connect?: Array<organizationWhereUniqueInput>;
}
