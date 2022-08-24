import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersWhereUniqueInput } from './users-where-unique.input';
import { Type } from 'class-transformer';
import { usersCreateWithoutWork_schedules_created_byTousersInput } from './users-create-without-work-schedules-created-by-tousers.input';

@InputType()
export class usersCreateOrConnectWithoutWork_schedules_created_byTousersInput {

    @Field(() => usersWhereUniqueInput, {nullable:false})
    @Type(() => usersWhereUniqueInput)
    where!: usersWhereUniqueInput;

    @Field(() => usersCreateWithoutWork_schedules_created_byTousersInput, {nullable:false})
    @Type(() => usersCreateWithoutWork_schedules_created_byTousersInput)
    create!: usersCreateWithoutWork_schedules_created_byTousersInput;
}
