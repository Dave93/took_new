import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersWhereUniqueInput } from './users-where-unique.input';
import { Type } from 'class-transformer';
import { usersCreateWithoutWork_schedule_entries_updated_byTousersInput } from './users-create-without-work-schedule-entries-updated-by-tousers.input';

@InputType()
export class usersCreateOrConnectWithoutWork_schedule_entries_updated_byTousersInput {

    @Field(() => usersWhereUniqueInput, {nullable:false})
    @Type(() => usersWhereUniqueInput)
    where!: usersWhereUniqueInput;

    @Field(() => usersCreateWithoutWork_schedule_entries_updated_byTousersInput, {nullable:false})
    @Type(() => usersCreateWithoutWork_schedule_entries_updated_byTousersInput)
    create!: usersCreateWithoutWork_schedule_entries_updated_byTousersInput;
}
