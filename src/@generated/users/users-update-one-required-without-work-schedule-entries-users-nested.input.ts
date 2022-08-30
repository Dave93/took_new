import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersCreateWithoutWork_schedule_entries_usersInput } from './users-create-without-work-schedule-entries-users.input';
import { Type } from 'class-transformer';
import { usersCreateOrConnectWithoutWork_schedule_entries_usersInput } from './users-create-or-connect-without-work-schedule-entries-users.input';
import { usersUpsertWithoutWork_schedule_entries_usersInput } from './users-upsert-without-work-schedule-entries-users.input';
import { usersWhereUniqueInput } from './users-where-unique.input';
import { usersUpdateWithoutWork_schedule_entries_usersInput } from './users-update-without-work-schedule-entries-users.input';

@InputType()
export class usersUpdateOneRequiredWithoutWork_schedule_entries_usersNestedInput {

    @Field(() => usersCreateWithoutWork_schedule_entries_usersInput, {nullable:true})
    @Type(() => usersCreateWithoutWork_schedule_entries_usersInput)
    create?: usersCreateWithoutWork_schedule_entries_usersInput;

    @Field(() => usersCreateOrConnectWithoutWork_schedule_entries_usersInput, {nullable:true})
    @Type(() => usersCreateOrConnectWithoutWork_schedule_entries_usersInput)
    connectOrCreate?: usersCreateOrConnectWithoutWork_schedule_entries_usersInput;

    @Field(() => usersUpsertWithoutWork_schedule_entries_usersInput, {nullable:true})
    @Type(() => usersUpsertWithoutWork_schedule_entries_usersInput)
    upsert?: usersUpsertWithoutWork_schedule_entries_usersInput;

    @Field(() => usersWhereUniqueInput, {nullable:true})
    @Type(() => usersWhereUniqueInput)
    connect?: usersWhereUniqueInput;

    @Field(() => usersUpdateWithoutWork_schedule_entries_usersInput, {nullable:true})
    @Type(() => usersUpdateWithoutWork_schedule_entries_usersInput)
    update?: usersUpdateWithoutWork_schedule_entries_usersInput;
}
