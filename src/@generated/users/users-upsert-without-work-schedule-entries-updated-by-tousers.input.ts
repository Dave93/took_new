import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersUpdateWithoutWork_schedule_entries_updated_byTousersInput } from './users-update-without-work-schedule-entries-updated-by-tousers.input';
import { Type } from 'class-transformer';
import { usersCreateWithoutWork_schedule_entries_updated_byTousersInput } from './users-create-without-work-schedule-entries-updated-by-tousers.input';

@InputType()
export class usersUpsertWithoutWork_schedule_entries_updated_byTousersInput {

    @Field(() => usersUpdateWithoutWork_schedule_entries_updated_byTousersInput, {nullable:false})
    @Type(() => usersUpdateWithoutWork_schedule_entries_updated_byTousersInput)
    update!: usersUpdateWithoutWork_schedule_entries_updated_byTousersInput;

    @Field(() => usersCreateWithoutWork_schedule_entries_updated_byTousersInput, {nullable:false})
    @Type(() => usersCreateWithoutWork_schedule_entries_updated_byTousersInput)
    create!: usersCreateWithoutWork_schedule_entries_updated_byTousersInput;
}
