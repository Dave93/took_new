import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { work_schedulesCreateWithoutUsers_work_schedulesInput } from './work-schedules-create-without-users-work-schedules.input';
import { Type } from 'class-transformer';
import { work_schedulesCreateOrConnectWithoutUsers_work_schedulesInput } from './work-schedules-create-or-connect-without-users-work-schedules.input';
import { work_schedulesUpsertWithoutUsers_work_schedulesInput } from './work-schedules-upsert-without-users-work-schedules.input';
import { work_schedulesWhereUniqueInput } from './work-schedules-where-unique.input';
import { work_schedulesUpdateWithoutUsers_work_schedulesInput } from './work-schedules-update-without-users-work-schedules.input';

@InputType()
export class work_schedulesUpdateOneRequiredWithoutUsers_work_schedulesNestedInput {

    @Field(() => work_schedulesCreateWithoutUsers_work_schedulesInput, {nullable:true})
    @Type(() => work_schedulesCreateWithoutUsers_work_schedulesInput)
    create?: work_schedulesCreateWithoutUsers_work_schedulesInput;

    @Field(() => work_schedulesCreateOrConnectWithoutUsers_work_schedulesInput, {nullable:true})
    @Type(() => work_schedulesCreateOrConnectWithoutUsers_work_schedulesInput)
    connectOrCreate?: work_schedulesCreateOrConnectWithoutUsers_work_schedulesInput;

    @Field(() => work_schedulesUpsertWithoutUsers_work_schedulesInput, {nullable:true})
    @Type(() => work_schedulesUpsertWithoutUsers_work_schedulesInput)
    upsert?: work_schedulesUpsertWithoutUsers_work_schedulesInput;

    @Field(() => work_schedulesWhereUniqueInput, {nullable:true})
    @Type(() => work_schedulesWhereUniqueInput)
    connect?: work_schedulesWhereUniqueInput;

    @Field(() => work_schedulesUpdateWithoutUsers_work_schedulesInput, {nullable:true})
    @Type(() => work_schedulesUpdateWithoutUsers_work_schedulesInput)
    update?: work_schedulesUpdateWithoutUsers_work_schedulesInput;
}
