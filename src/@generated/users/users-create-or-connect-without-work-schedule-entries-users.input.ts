import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersWhereUniqueInput } from './users-where-unique.input';
import { Type } from 'class-transformer';
import { usersCreateWithoutWork_schedule_entries_usersInput } from './users-create-without-work-schedule-entries-users.input';

@InputType()
export class usersCreateOrConnectWithoutWork_schedule_entries_usersInput {

    @Field(() => usersWhereUniqueInput, {nullable:false})
    @Type(() => usersWhereUniqueInput)
    where!: usersWhereUniqueInput;

    @Field(() => usersCreateWithoutWork_schedule_entries_usersInput, {nullable:false})
    @Type(() => usersCreateWithoutWork_schedule_entries_usersInput)
    create!: usersCreateWithoutWork_schedule_entries_usersInput;
}
