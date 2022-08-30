import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersCreateWithoutWork_schedule_entries_created_byTousersInput } from './users-create-without-work-schedule-entries-created-by-tousers.input';
import { Type } from 'class-transformer';
import { usersCreateOrConnectWithoutWork_schedule_entries_created_byTousersInput } from './users-create-or-connect-without-work-schedule-entries-created-by-tousers.input';
import { usersUpsertWithoutWork_schedule_entries_created_byTousersInput } from './users-upsert-without-work-schedule-entries-created-by-tousers.input';
import { usersWhereUniqueInput } from './users-where-unique.input';
import { usersUpdateWithoutWork_schedule_entries_created_byTousersInput } from './users-update-without-work-schedule-entries-created-by-tousers.input';

@InputType()
export class usersUpdateOneWithoutWork_schedule_entries_created_byTousersNestedInput {

    @Field(() => usersCreateWithoutWork_schedule_entries_created_byTousersInput, {nullable:true})
    @Type(() => usersCreateWithoutWork_schedule_entries_created_byTousersInput)
    create?: usersCreateWithoutWork_schedule_entries_created_byTousersInput;

    @Field(() => usersCreateOrConnectWithoutWork_schedule_entries_created_byTousersInput, {nullable:true})
    @Type(() => usersCreateOrConnectWithoutWork_schedule_entries_created_byTousersInput)
    connectOrCreate?: usersCreateOrConnectWithoutWork_schedule_entries_created_byTousersInput;

    @Field(() => usersUpsertWithoutWork_schedule_entries_created_byTousersInput, {nullable:true})
    @Type(() => usersUpsertWithoutWork_schedule_entries_created_byTousersInput)
    upsert?: usersUpsertWithoutWork_schedule_entries_created_byTousersInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => usersWhereUniqueInput, {nullable:true})
    @Type(() => usersWhereUniqueInput)
    connect?: usersWhereUniqueInput;

    @Field(() => usersUpdateWithoutWork_schedule_entries_created_byTousersInput, {nullable:true})
    @Type(() => usersUpdateWithoutWork_schedule_entries_created_byTousersInput)
    update?: usersUpdateWithoutWork_schedule_entries_created_byTousersInput;
}
