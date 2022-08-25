import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { terminalsCreateWithoutOrganizationInput } from './terminals-create-without-organization.input';
import { Type } from 'class-transformer';
import { terminalsCreateOrConnectWithoutOrganizationInput } from './terminals-create-or-connect-without-organization.input';
import { terminalsUpsertWithWhereUniqueWithoutOrganizationInput } from './terminals-upsert-with-where-unique-without-organization.input';
import { terminalsCreateManyOrganizationInputEnvelope } from './terminals-create-many-organization-input-envelope.input';
import { terminalsWhereUniqueInput } from './terminals-where-unique.input';
import { terminalsUpdateWithWhereUniqueWithoutOrganizationInput } from './terminals-update-with-where-unique-without-organization.input';
import { terminalsUpdateManyWithWhereWithoutOrganizationInput } from './terminals-update-many-with-where-without-organization.input';
import { terminalsScalarWhereInput } from './terminals-scalar-where.input';

@InputType()
export class terminalsUpdateManyWithoutOrganizationNestedInput {

    @Field(() => [terminalsCreateWithoutOrganizationInput], {nullable:true})
    @Type(() => terminalsCreateWithoutOrganizationInput)
    create?: Array<terminalsCreateWithoutOrganizationInput>;

    @Field(() => [terminalsCreateOrConnectWithoutOrganizationInput], {nullable:true})
    @Type(() => terminalsCreateOrConnectWithoutOrganizationInput)
    connectOrCreate?: Array<terminalsCreateOrConnectWithoutOrganizationInput>;

    @Field(() => [terminalsUpsertWithWhereUniqueWithoutOrganizationInput], {nullable:true})
    @Type(() => terminalsUpsertWithWhereUniqueWithoutOrganizationInput)
    upsert?: Array<terminalsUpsertWithWhereUniqueWithoutOrganizationInput>;

    @Field(() => terminalsCreateManyOrganizationInputEnvelope, {nullable:true})
    @Type(() => terminalsCreateManyOrganizationInputEnvelope)
    createMany?: terminalsCreateManyOrganizationInputEnvelope;

    @Field(() => [terminalsWhereUniqueInput], {nullable:true})
    @Type(() => terminalsWhereUniqueInput)
    set?: Array<terminalsWhereUniqueInput>;

    @Field(() => [terminalsWhereUniqueInput], {nullable:true})
    @Type(() => terminalsWhereUniqueInput)
    disconnect?: Array<terminalsWhereUniqueInput>;

    @Field(() => [terminalsWhereUniqueInput], {nullable:true})
    @Type(() => terminalsWhereUniqueInput)
    delete?: Array<terminalsWhereUniqueInput>;

    @Field(() => [terminalsWhereUniqueInput], {nullable:true})
    @Type(() => terminalsWhereUniqueInput)
    connect?: Array<terminalsWhereUniqueInput>;

    @Field(() => [terminalsUpdateWithWhereUniqueWithoutOrganizationInput], {nullable:true})
    @Type(() => terminalsUpdateWithWhereUniqueWithoutOrganizationInput)
    update?: Array<terminalsUpdateWithWhereUniqueWithoutOrganizationInput>;

    @Field(() => [terminalsUpdateManyWithWhereWithoutOrganizationInput], {nullable:true})
    @Type(() => terminalsUpdateManyWithWhereWithoutOrganizationInput)
    updateMany?: Array<terminalsUpdateManyWithWhereWithoutOrganizationInput>;

    @Field(() => [terminalsScalarWhereInput], {nullable:true})
    @Type(() => terminalsScalarWhereInput)
    deleteMany?: Array<terminalsScalarWhereInput>;
}
