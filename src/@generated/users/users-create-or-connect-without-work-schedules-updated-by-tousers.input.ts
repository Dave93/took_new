import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersWhereUniqueInput } from './users-where-unique.input';
import { Type } from 'class-transformer';
import { usersCreateWithoutWork_schedules_updated_byTousersInput } from './users-create-without-work-schedules-updated-by-tousers.input';

@InputType()
export class usersCreateOrConnectWithoutWork_schedules_updated_byTousersInput {

    @Field(() => usersWhereUniqueInput, {nullable:false})
    @Type(() => usersWhereUniqueInput)
    where!: usersWhereUniqueInput;

    @Field(() => usersCreateWithoutWork_schedules_updated_byTousersInput, {nullable:false})
    @Type(() => usersCreateWithoutWork_schedules_updated_byTousersInput)
    create!: usersCreateWithoutWork_schedules_updated_byTousersInput;
}
