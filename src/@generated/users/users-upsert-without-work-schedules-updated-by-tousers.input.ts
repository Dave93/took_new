import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersUpdateWithoutWork_schedules_updated_byTousersInput } from './users-update-without-work-schedules-updated-by-tousers.input';
import { Type } from 'class-transformer';
import { usersCreateWithoutWork_schedules_updated_byTousersInput } from './users-create-without-work-schedules-updated-by-tousers.input';

@InputType()
export class usersUpsertWithoutWork_schedules_updated_byTousersInput {

    @Field(() => usersUpdateWithoutWork_schedules_updated_byTousersInput, {nullable:false})
    @Type(() => usersUpdateWithoutWork_schedules_updated_byTousersInput)
    update!: usersUpdateWithoutWork_schedules_updated_byTousersInput;

    @Field(() => usersCreateWithoutWork_schedules_updated_byTousersInput, {nullable:false})
    @Type(() => usersCreateWithoutWork_schedules_updated_byTousersInput)
    create!: usersCreateWithoutWork_schedules_updated_byTousersInput;
}
