import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersUpdateWithoutWork_schedule_entries_usersInput } from './users-update-without-work-schedule-entries-users.input';
import { Type } from 'class-transformer';
import { usersCreateWithoutWork_schedule_entries_usersInput } from './users-create-without-work-schedule-entries-users.input';

@InputType()
export class usersUpsertWithoutWork_schedule_entries_usersInput {

    @Field(() => usersUpdateWithoutWork_schedule_entries_usersInput, {nullable:false})
    @Type(() => usersUpdateWithoutWork_schedule_entries_usersInput)
    update!: usersUpdateWithoutWork_schedule_entries_usersInput;

    @Field(() => usersCreateWithoutWork_schedule_entries_usersInput, {nullable:false})
    @Type(() => usersCreateWithoutWork_schedule_entries_usersInput)
    create!: usersCreateWithoutWork_schedule_entries_usersInput;
}
