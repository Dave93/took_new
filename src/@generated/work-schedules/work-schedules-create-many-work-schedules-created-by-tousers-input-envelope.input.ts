import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { work_schedulesCreateManyWork_schedules_created_byTousersInput } from './work-schedules-create-many-work-schedules-created-by-tousers.input';
import { Type } from 'class-transformer';

@InputType()
export class work_schedulesCreateManyWork_schedules_created_byTousersInputEnvelope {

    @Field(() => [work_schedulesCreateManyWork_schedules_created_byTousersInput], {nullable:false})
    @Type(() => work_schedulesCreateManyWork_schedules_created_byTousersInput)
    data!: Array<work_schedulesCreateManyWork_schedules_created_byTousersInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
