import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersUpdateWithoutWork_schedule_entries_created_byTousersInput } from './users-update-without-work-schedule-entries-created-by-tousers.input';
import { Type } from 'class-transformer';
import { usersCreateWithoutWork_schedule_entries_created_byTousersInput } from './users-create-without-work-schedule-entries-created-by-tousers.input';

@InputType()
export class usersUpsertWithoutWork_schedule_entries_created_byTousersInput {

    @Field(() => usersUpdateWithoutWork_schedule_entries_created_byTousersInput, {nullable:false})
    @Type(() => usersUpdateWithoutWork_schedule_entries_created_byTousersInput)
    update!: usersUpdateWithoutWork_schedule_entries_created_byTousersInput;

    @Field(() => usersCreateWithoutWork_schedule_entries_created_byTousersInput, {nullable:false})
    @Type(() => usersCreateWithoutWork_schedule_entries_created_byTousersInput)
    create!: usersCreateWithoutWork_schedule_entries_created_byTousersInput;
}
