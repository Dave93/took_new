import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { organizationCreateWithoutOrganization_updated_byTousersInput } from './organization-create-without-organization-updated-by-tousers.input';
import { Type } from 'class-transformer';
import { organizationCreateOrConnectWithoutOrganization_updated_byTousersInput } from './organization-create-or-connect-without-organization-updated-by-tousers.input';
import { organizationUpsertWithWhereUniqueWithoutOrganization_updated_byTousersInput } from './organization-upsert-with-where-unique-without-organization-updated-by-tousers.input';
import { organizationCreateManyOrganization_updated_byTousersInputEnvelope } from './organization-create-many-organization-updated-by-tousers-input-envelope.input';
import { organizationWhereUniqueInput } from './organization-where-unique.input';
import { organizationUpdateWithWhereUniqueWithoutOrganization_updated_byTousersInput } from './organization-update-with-where-unique-without-organization-updated-by-tousers.input';
import { organizationUpdateManyWithWhereWithoutOrganization_updated_byTousersInput } from './organization-update-many-with-where-without-organization-updated-by-tousers.input';
import { organizationScalarWhereInput } from './organization-scalar-where.input';

@InputType()
export class organizationUncheckedUpdateManyWithoutOrganization_updated_byTousersNestedInput {

    @Field(() => [organizationCreateWithoutOrganization_updated_byTousersInput], {nullable:true})
    @Type(() => organizationCreateWithoutOrganization_updated_byTousersInput)
    create?: Array<organizationCreateWithoutOrganization_updated_byTousersInput>;

    @Field(() => [organizationCreateOrConnectWithoutOrganization_updated_byTousersInput], {nullable:true})
    @Type(() => organizationCreateOrConnectWithoutOrganization_updated_byTousersInput)
    connectOrCreate?: Array<organizationCreateOrConnectWithoutOrganization_updated_byTousersInput>;

    @Field(() => [organizationUpsertWithWhereUniqueWithoutOrganization_updated_byTousersInput], {nullable:true})
    @Type(() => organizationUpsertWithWhereUniqueWithoutOrganization_updated_byTousersInput)
    upsert?: Array<organizationUpsertWithWhereUniqueWithoutOrganization_updated_byTousersInput>;

    @Field(() => organizationCreateManyOrganization_updated_byTousersInputEnvelope, {nullable:true})
    @Type(() => organizationCreateManyOrganization_updated_byTousersInputEnvelope)
    createMany?: organizationCreateManyOrganization_updated_byTousersInputEnvelope;

    @Field(() => [organizationWhereUniqueInput], {nullable:true})
    @Type(() => organizationWhereUniqueInput)
    set?: Array<organizationWhereUniqueInput>;

    @Field(() => [organizationWhereUniqueInput], {nullable:true})
    @Type(() => organizationWhereUniqueInput)
    disconnect?: Array<organizationWhereUniqueInput>;

    @Field(() => [organizationWhereUniqueInput], {nullable:true})
    @Type(() => organizationWhereUniqueInput)
    delete?: Array<organizationWhereUniqueInput>;

    @Field(() => [organizationWhereUniqueInput], {nullable:true})
    @Type(() => organizationWhereUniqueInput)
    connect?: Array<organizationWhereUniqueInput>;

    @Field(() => [organizationUpdateWithWhereUniqueWithoutOrganization_updated_byTousersInput], {nullable:true})
    @Type(() => organizationUpdateWithWhereUniqueWithoutOrganization_updated_byTousersInput)
    update?: Array<organizationUpdateWithWhereUniqueWithoutOrganization_updated_byTousersInput>;

    @Field(() => [organizationUpdateManyWithWhereWithoutOrganization_updated_byTousersInput], {nullable:true})
    @Type(() => organizationUpdateManyWithWhereWithoutOrganization_updated_byTousersInput)
    updateMany?: Array<organizationUpdateManyWithWhereWithoutOrganization_updated_byTousersInput>;

    @Field(() => [organizationScalarWhereInput], {nullable:true})
    @Type(() => organizationScalarWhereInput)
    deleteMany?: Array<organizationScalarWhereInput>;
}
