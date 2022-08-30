import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersCreateWithoutWork_schedule_entries_updated_byTousersInput } from './users-create-without-work-schedule-entries-updated-by-tousers.input';
import { Type } from 'class-transformer';
import { usersCreateOrConnectWithoutWork_schedule_entries_updated_byTousersInput } from './users-create-or-connect-without-work-schedule-entries-updated-by-tousers.input';
import { usersWhereUniqueInput } from './users-where-unique.input';

@InputType()
export class usersCreateNestedOneWithoutWork_schedule_entries_updated_byTousersInput {

    @Field(() => usersCreateWithoutWork_schedule_entries_updated_byTousersInput, {nullable:true})
    @Type(() => usersCreateWithoutWork_schedule_entries_updated_byTousersInput)
    create?: usersCreateWithoutWork_schedule_entries_updated_byTousersInput;

    @Field(() => usersCreateOrConnectWithoutWork_schedule_entries_updated_byTousersInput, {nullable:true})
    @Type(() => usersCreateOrConnectWithoutWork_schedule_entries_updated_byTousersInput)
    connectOrCreate?: usersCreateOrConnectWithoutWork_schedule_entries_updated_byTousersInput;

    @Field(() => usersWhereUniqueInput, {nullable:true})
    @Type(() => usersWhereUniqueInput)
    connect?: usersWhereUniqueInput;
}
