import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { work_schedule_entriesScalarWhereInput } from './work-schedule-entries-scalar-where.input';
import { Type } from 'class-transformer';
import { work_schedule_entriesUpdateManyMutationInput } from './work-schedule-entries-update-many-mutation.input';

@InputType()
export class work_schedule_entriesUpdateManyWithWhereWithoutWork_schedule_entries_usersInput {

    @Field(() => work_schedule_entriesScalarWhereInput, {nullable:false})
    @Type(() => work_schedule_entriesScalarWhereInput)
    where!: work_schedule_entriesScalarWhereInput;

    @Field(() => work_schedule_entriesUpdateManyMutationInput, {nullable:false})
    @Type(() => work_schedule_entriesUpdateManyMutationInput)
    data!: work_schedule_entriesUpdateManyMutationInput;
}
