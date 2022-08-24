import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { work_schedulesCreateWithoutWork_schedules_created_byTousersInput } from './work-schedules-create-without-work-schedules-created-by-tousers.input';
import { Type } from 'class-transformer';
import { work_schedulesCreateOrConnectWithoutWork_schedules_created_byTousersInput } from './work-schedules-create-or-connect-without-work-schedules-created-by-tousers.input';
import { work_schedulesCreateManyWork_schedules_created_byTousersInputEnvelope } from './work-schedules-create-many-work-schedules-created-by-tousers-input-envelope.input';
import { work_schedulesWhereUniqueInput } from './work-schedules-where-unique.input';

@InputType()
export class work_schedulesCreateNestedManyWithoutWork_schedules_created_byTousersInput {

    @Field(() => [work_schedulesCreateWithoutWork_schedules_created_byTousersInput], {nullable:true})
    @Type(() => work_schedulesCreateWithoutWork_schedules_created_byTousersInput)
    create?: Array<work_schedulesCreateWithoutWork_schedules_created_byTousersInput>;

    @Field(() => [work_schedulesCreateOrConnectWithoutWork_schedules_created_byTousersInput], {nullable:true})
    @Type(() => work_schedulesCreateOrConnectWithoutWork_schedules_created_byTousersInput)
    connectOrCreate?: Array<work_schedulesCreateOrConnectWithoutWork_schedules_created_byTousersInput>;

    @Field(() => work_schedulesCreateManyWork_schedules_created_byTousersInputEnvelope, {nullable:true})
    @Type(() => work_schedulesCreateManyWork_schedules_created_byTousersInputEnvelope)
    createMany?: work_schedulesCreateManyWork_schedules_created_byTousersInputEnvelope;

    @Field(() => [work_schedulesWhereUniqueInput], {nullable:true})
    @Type(() => work_schedulesWhereUniqueInput)
    connect?: Array<work_schedulesWhereUniqueInput>;
}
