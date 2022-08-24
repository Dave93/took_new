import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { work_schedulesCreateWithoutOrganizationInput } from './work-schedules-create-without-organization.input';
import { Type } from 'class-transformer';
import { work_schedulesCreateOrConnectWithoutOrganizationInput } from './work-schedules-create-or-connect-without-organization.input';
import { work_schedulesCreateManyOrganizationInputEnvelope } from './work-schedules-create-many-organization-input-envelope.input';
import { work_schedulesWhereUniqueInput } from './work-schedules-where-unique.input';

@InputType()
export class work_schedulesUncheckedCreateNestedManyWithoutOrganizationInput {

    @Field(() => [work_schedulesCreateWithoutOrganizationInput], {nullable:true})
    @Type(() => work_schedulesCreateWithoutOrganizationInput)
    create?: Array<work_schedulesCreateWithoutOrganizationInput>;

    @Field(() => [work_schedulesCreateOrConnectWithoutOrganizationInput], {nullable:true})
    @Type(() => work_schedulesCreateOrConnectWithoutOrganizationInput)
    connectOrCreate?: Array<work_schedulesCreateOrConnectWithoutOrganizationInput>;

    @Field(() => work_schedulesCreateManyOrganizationInputEnvelope, {nullable:true})
    @Type(() => work_schedulesCreateManyOrganizationInputEnvelope)
    createMany?: work_schedulesCreateManyOrganizationInputEnvelope;

    @Field(() => [work_schedulesWhereUniqueInput], {nullable:true})
    @Type(() => work_schedulesWhereUniqueInput)
    connect?: Array<work_schedulesWhereUniqueInput>;
}
