import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { work_schedulesCreateWithoutWork_schedules_updated_byTousersInput } from './work-schedules-create-without-work-schedules-updated-by-tousers.input';
import { Type } from 'class-transformer';
import { work_schedulesCreateOrConnectWithoutWork_schedules_updated_byTousersInput } from './work-schedules-create-or-connect-without-work-schedules-updated-by-tousers.input';
import { work_schedulesCreateManyWork_schedules_updated_byTousersInputEnvelope } from './work-schedules-create-many-work-schedules-updated-by-tousers-input-envelope.input';
import { work_schedulesWhereUniqueInput } from './work-schedules-where-unique.input';

@InputType()
export class work_schedulesUncheckedCreateNestedManyWithoutWork_schedules_updated_byTousersInput {

    @Field(() => [work_schedulesCreateWithoutWork_schedules_updated_byTousersInput], {nullable:true})
    @Type(() => work_schedulesCreateWithoutWork_schedules_updated_byTousersInput)
    create?: Array<work_schedulesCreateWithoutWork_schedules_updated_byTousersInput>;

    @Field(() => [work_schedulesCreateOrConnectWithoutWork_schedules_updated_byTousersInput], {nullable:true})
    @Type(() => work_schedulesCreateOrConnectWithoutWork_schedules_updated_byTousersInput)
    connectOrCreate?: Array<work_schedulesCreateOrConnectWithoutWork_schedules_updated_byTousersInput>;

    @Field(() => work_schedulesCreateManyWork_schedules_updated_byTousersInputEnvelope, {nullable:true})
    @Type(() => work_schedulesCreateManyWork_schedules_updated_byTousersInputEnvelope)
    createMany?: work_schedulesCreateManyWork_schedules_updated_byTousersInputEnvelope;

    @Field(() => [work_schedulesWhereUniqueInput], {nullable:true})
    @Type(() => work_schedulesWhereUniqueInput)
    connect?: Array<work_schedulesWhereUniqueInput>;
}
