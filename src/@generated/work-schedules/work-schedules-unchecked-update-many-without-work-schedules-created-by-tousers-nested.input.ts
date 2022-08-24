import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { work_schedulesCreateWithoutWork_schedules_created_byTousersInput } from './work-schedules-create-without-work-schedules-created-by-tousers.input';
import { Type } from 'class-transformer';
import { work_schedulesCreateOrConnectWithoutWork_schedules_created_byTousersInput } from './work-schedules-create-or-connect-without-work-schedules-created-by-tousers.input';
import { work_schedulesUpsertWithWhereUniqueWithoutWork_schedules_created_byTousersInput } from './work-schedules-upsert-with-where-unique-without-work-schedules-created-by-tousers.input';
import { work_schedulesCreateManyWork_schedules_created_byTousersInputEnvelope } from './work-schedules-create-many-work-schedules-created-by-tousers-input-envelope.input';
import { work_schedulesWhereUniqueInput } from './work-schedules-where-unique.input';
import { work_schedulesUpdateWithWhereUniqueWithoutWork_schedules_created_byTousersInput } from './work-schedules-update-with-where-unique-without-work-schedules-created-by-tousers.input';
import { work_schedulesUpdateManyWithWhereWithoutWork_schedules_created_byTousersInput } from './work-schedules-update-many-with-where-without-work-schedules-created-by-tousers.input';
import { work_schedulesScalarWhereInput } from './work-schedules-scalar-where.input';

@InputType()
export class work_schedulesUncheckedUpdateManyWithoutWork_schedules_created_byTousersNestedInput {

    @Field(() => [work_schedulesCreateWithoutWork_schedules_created_byTousersInput], {nullable:true})
    @Type(() => work_schedulesCreateWithoutWork_schedules_created_byTousersInput)
    create?: Array<work_schedulesCreateWithoutWork_schedules_created_byTousersInput>;

    @Field(() => [work_schedulesCreateOrConnectWithoutWork_schedules_created_byTousersInput], {nullable:true})
    @Type(() => work_schedulesCreateOrConnectWithoutWork_schedules_created_byTousersInput)
    connectOrCreate?: Array<work_schedulesCreateOrConnectWithoutWork_schedules_created_byTousersInput>;

    @Field(() => [work_schedulesUpsertWithWhereUniqueWithoutWork_schedules_created_byTousersInput], {nullable:true})
    @Type(() => work_schedulesUpsertWithWhereUniqueWithoutWork_schedules_created_byTousersInput)
    upsert?: Array<work_schedulesUpsertWithWhereUniqueWithoutWork_schedules_created_byTousersInput>;

    @Field(() => work_schedulesCreateManyWork_schedules_created_byTousersInputEnvelope, {nullable:true})
    @Type(() => work_schedulesCreateManyWork_schedules_created_byTousersInputEnvelope)
    createMany?: work_schedulesCreateManyWork_schedules_created_byTousersInputEnvelope;

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

    @Field(() => [work_schedulesUpdateWithWhereUniqueWithoutWork_schedules_created_byTousersInput], {nullable:true})
    @Type(() => work_schedulesUpdateWithWhereUniqueWithoutWork_schedules_created_byTousersInput)
    update?: Array<work_schedulesUpdateWithWhereUniqueWithoutWork_schedules_created_byTousersInput>;

    @Field(() => [work_schedulesUpdateManyWithWhereWithoutWork_schedules_created_byTousersInput], {nullable:true})
    @Type(() => work_schedulesUpdateManyWithWhereWithoutWork_schedules_created_byTousersInput)
    updateMany?: Array<work_schedulesUpdateManyWithWhereWithoutWork_schedules_created_byTousersInput>;

    @Field(() => [work_schedulesScalarWhereInput], {nullable:true})
    @Type(() => work_schedulesScalarWhereInput)
    deleteMany?: Array<work_schedulesScalarWhereInput>;
}
