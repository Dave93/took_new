import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { work_schedulesUpdateWithoutUsers_work_schedulesInput } from './work-schedules-update-without-users-work-schedules.input';
import { Type } from 'class-transformer';
import { work_schedulesCreateWithoutUsers_work_schedulesInput } from './work-schedules-create-without-users-work-schedules.input';

@InputType()
export class work_schedulesUpsertWithoutUsers_work_schedulesInput {

    @Field(() => work_schedulesUpdateWithoutUsers_work_schedulesInput, {nullable:false})
    @Type(() => work_schedulesUpdateWithoutUsers_work_schedulesInput)
    update!: work_schedulesUpdateWithoutUsers_work_schedulesInput;

    @Field(() => work_schedulesCreateWithoutUsers_work_schedulesInput, {nullable:false})
    @Type(() => work_schedulesCreateWithoutUsers_work_schedulesInput)
    create!: work_schedulesCreateWithoutUsers_work_schedulesInput;
}
