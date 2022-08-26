import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { users_work_schedulesCreateManyWork_schedulesInput } from './users-work-schedules-create-many-work-schedules.input';
import { Type } from 'class-transformer';

@InputType()
export class users_work_schedulesCreateManyWork_schedulesInputEnvelope {

    @Field(() => [users_work_schedulesCreateManyWork_schedulesInput], {nullable:false})
    @Type(() => users_work_schedulesCreateManyWork_schedulesInput)
    data!: Array<users_work_schedulesCreateManyWork_schedulesInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
