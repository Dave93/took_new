import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { work_schedulesCreateManyInput } from '../work-schedules/work-schedules-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyworkSchedulesArgs {

    @Field(() => [work_schedulesCreateManyInput], {nullable:false})
    @Type(() => work_schedulesCreateManyInput)
    data!: Array<work_schedulesCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
