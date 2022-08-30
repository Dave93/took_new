import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { work_schedule_entriesCreateManyWork_schedule_entries_usersInput } from './work-schedule-entries-create-many-work-schedule-entries-users.input';
import { Type } from 'class-transformer';

@InputType()
export class work_schedule_entriesCreateManyWork_schedule_entries_usersInputEnvelope {

    @Field(() => [work_schedule_entriesCreateManyWork_schedule_entries_usersInput], {nullable:false})
    @Type(() => work_schedule_entriesCreateManyWork_schedule_entries_usersInput)
    data!: Array<work_schedule_entriesCreateManyWork_schedule_entries_usersInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
