import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { work_schedulesCreateManyWork_schedules_updated_byTousersInput } from './work-schedules-create-many-work-schedules-updated-by-tousers.input';
import { Type } from 'class-transformer';

@InputType()
export class work_schedulesCreateManyWork_schedules_updated_byTousersInputEnvelope {

    @Field(() => [work_schedulesCreateManyWork_schedules_updated_byTousersInput], {nullable:false})
    @Type(() => work_schedulesCreateManyWork_schedules_updated_byTousersInput)
    data!: Array<work_schedulesCreateManyWork_schedules_updated_byTousersInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
