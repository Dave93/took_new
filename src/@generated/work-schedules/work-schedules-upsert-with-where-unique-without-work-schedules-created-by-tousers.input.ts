import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { work_schedulesWhereUniqueInput } from './work-schedules-where-unique.input';
import { Type } from 'class-transformer';
import { work_schedulesUpdateWithoutWork_schedules_created_byTousersInput } from './work-schedules-update-without-work-schedules-created-by-tousers.input';
import { work_schedulesCreateWithoutWork_schedules_created_byTousersInput } from './work-schedules-create-without-work-schedules-created-by-tousers.input';

@InputType()
export class work_schedulesUpsertWithWhereUniqueWithoutWork_schedules_created_byTousersInput {

    @Field(() => work_schedulesWhereUniqueInput, {nullable:false})
    @Type(() => work_schedulesWhereUniqueInput)
    where!: work_schedulesWhereUniqueInput;

    @Field(() => work_schedulesUpdateWithoutWork_schedules_created_byTousersInput, {nullable:false})
    @Type(() => work_schedulesUpdateWithoutWork_schedules_created_byTousersInput)
    update!: work_schedulesUpdateWithoutWork_schedules_created_byTousersInput;

    @Field(() => work_schedulesCreateWithoutWork_schedules_created_byTousersInput, {nullable:false})
    @Type(() => work_schedulesCreateWithoutWork_schedules_created_byTousersInput)
    create!: work_schedulesCreateWithoutWork_schedules_created_byTousersInput;
}
