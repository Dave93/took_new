import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { organizationCreateWithoutOrganization_created_byTousersInput } from './organization-create-without-organization-created-by-tousers.input';
import { Type } from 'class-transformer';
import { organizationCreateOrConnectWithoutOrganization_created_byTousersInput } from './organization-create-or-connect-without-organization-created-by-tousers.input';
import { organizationUpsertWithWhereUniqueWithoutOrganization_created_byTousersInput } from './organization-upsert-with-where-unique-without-organization-created-by-tousers.input';
import { organizationCreateManyOrganization_created_byTousersInputEnvelope } from './organization-create-many-organization-created-by-tousers-input-envelope.input';
import { organizationWhereUniqueInput } from './organization-where-unique.input';
import { organizationUpdateWithWhereUniqueWithoutOrganization_created_byTousersInput } from './organization-update-with-where-unique-without-organization-created-by-tousers.input';
import { organizationUpdateManyWithWhereWithoutOrganization_created_byTousersInput } from './organization-update-many-with-where-without-organization-created-by-tousers.input';
import { organizationScalarWhereInput } from './organization-scalar-where.input';

@InputType()
export class organizationUncheckedUpdateManyWithoutOrganization_created_byTousersNestedInput {

    @Field(() => [organizationCreateWithoutOrganization_created_byTousersInput], {nullable:true})
    @Type(() => organizationCreateWithoutOrganization_created_byTousersInput)
    create?: Array<organizationCreateWithoutOrganization_created_byTousersInput>;

    @Field(() => [organizationCreateOrConnectWithoutOrganization_created_byTousersInput], {nullable:true})
    @Type(() => organizationCreateOrConnectWithoutOrganization_created_byTousersInput)
    connectOrCreate?: Array<organizationCreateOrConnectWithoutOrganization_created_byTousersInput>;

    @Field(() => [organizationUpsertWithWhereUniqueWithoutOrganization_created_byTousersInput], {nullable:true})
    @Type(() => organizationUpsertWithWhereUniqueWithoutOrganization_created_byTousersInput)
    upsert?: Array<organizationUpsertWithWhereUniqueWithoutOrganization_created_byTousersInput>;

    @Field(() => organizationCreateManyOrganization_created_byTousersInputEnvelope, {nullable:true})
    @Type(() => organizationCreateManyOrganization_created_byTousersInputEnvelope)
    createMany?: organizationCreateManyOrganization_created_byTousersInputEnvelope;

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

    @Field(() => [organizationUpdateWithWhereUniqueWithoutOrganization_created_byTousersInput], {nullable:true})
    @Type(() => organizationUpdateWithWhereUniqueWithoutOrganization_created_byTousersInput)
    update?: Array<organizationUpdateWithWhereUniqueWithoutOrganization_created_byTousersInput>;

    @Field(() => [organizationUpdateManyWithWhereWithoutOrganization_created_byTousersInput], {nullable:true})
    @Type(() => organizationUpdateManyWithWhereWithoutOrganization_created_byTousersInput)
    updateMany?: Array<organizationUpdateManyWithWhereWithoutOrganization_created_byTousersInput>;

    @Field(() => [organizationScalarWhereInput], {nullable:true})
    @Type(() => organizationScalarWhereInput)
    deleteMany?: Array<organizationScalarWhereInput>;
}
