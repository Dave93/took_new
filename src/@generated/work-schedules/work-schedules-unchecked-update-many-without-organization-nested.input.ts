import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { work_schedulesCreateWithoutOrganizationInput } from './work-schedules-create-without-organization.input';
import { Type } from 'class-transformer';
import { work_schedulesCreateOrConnectWithoutOrganizationInput } from './work-schedules-create-or-connect-without-organization.input';
import { work_schedulesUpsertWithWhereUniqueWithoutOrganizationInput } from './work-schedules-upsert-with-where-unique-without-organization.input';
import { work_schedulesCreateManyOrganizationInputEnvelope } from './work-schedules-create-many-organization-input-envelope.input';
import { work_schedulesWhereUniqueInput } from './work-schedules-where-unique.input';
import { work_schedulesUpdateWithWhereUniqueWithoutOrganizationInput } from './work-schedules-update-with-where-unique-without-organization.input';
import { work_schedulesUpdateManyWithWhereWithoutOrganizationInput } from './work-schedules-update-many-with-where-without-organization.input';
import { work_schedulesScalarWhereInput } from './work-schedules-scalar-where.input';

@InputType()
export class work_schedulesUncheckedUpdateManyWithoutOrganizationNestedInput {

    @Field(() => [work_schedulesCreateWithoutOrganizationInput], {nullable:true})
    @Type(() => work_schedulesCreateWithoutOrganizationInput)
    create?: Array<work_schedulesCreateWithoutOrganizationInput>;

    @Field(() => [work_schedulesCreateOrConnectWithoutOrganizationInput], {nullable:true})
    @Type(() => work_schedulesCreateOrConnectWithoutOrganizationInput)
    connectOrCreate?: Array<work_schedulesCreateOrConnectWithoutOrganizationInput>;

    @Field(() => [work_schedulesUpsertWithWhereUniqueWithoutOrganizationInput], {nullable:true})
    @Type(() => work_schedulesUpsertWithWhereUniqueWithoutOrganizationInput)
    upsert?: Array<work_schedulesUpsertWithWhereUniqueWithoutOrganizationInput>;

    @Field(() => work_schedulesCreateManyOrganizationInputEnvelope, {nullable:true})
    @Type(() => work_schedulesCreateManyOrganizationInputEnvelope)
    createMany?: work_schedulesCreateManyOrganizationInputEnvelope;

    @Field(() => [work_schedulesWhereUniqueInput], {nullable:true})
    @Type(() => work_schedulesWhereUniqueInput)
    set?: Array<work_schedulesWhereUniqueInput>;

    @Field(() => [work_schedulesWhereUniqueInput], {nullable:true})
    @Type(() => work_schedulesWhereUniqueInput)
    disconnect?: Array<work_schedulesWhereUniqueInput>;

    @Field(() => [work_schedulesWhereUniqueInput], {nullable:true})
    @Type(() => work_schedulesWhereUniqueInput)
    delete?: Array<work_schedulesWhereUniqueInput>;

    @Field(() => [work_schedulesWhereUniqueInput], {nullable:true})
    @Type(() => work_schedulesWhereUniqueInput)
    connect?: Array<work_schedulesWhereUniqueInput>;

    @Field(() => [work_schedulesUpdateWithWhereUniqueWithoutOrganizationInput], {nullable:true})
    @Type(() => work_schedulesUpdateWithWhereUniqueWithoutOrganizationInput)
    update?: Array<work_schedulesUpdateWithWhereUniqueWithoutOrganizationInput>;

    @Field(() => [work_schedulesUpdateManyWithWhereWithoutOrganizationInput], {nullable:true})
    @Type(() => work_schedulesUpdateManyWithWhereWithoutOrganizationInput)
    updateMany?: Array<work_schedulesUpdateManyWithWhereWithoutOrganizationInput>;

    @Field(() => [work_schedulesScalarWhereInput], {nullable:true})
    @Type(() => work_schedulesScalarWhereInput)
    deleteMany?: Array<work_schedulesScalarWhereInput>;
}
