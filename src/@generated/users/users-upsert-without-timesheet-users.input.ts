import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersUpdateWithoutTimesheet_usersInput } from './users-update-without-timesheet-users.input';
import { Type } from 'class-transformer';
import { usersCreateWithoutTimesheet_usersInput } from './users-create-without-timesheet-users.input';

@InputType()
export class usersUpsertWithoutTimesheet_usersInput {

    @Field(() => usersUpdateWithoutTimesheet_usersInput, {nullable:false})
    @Type(() => usersUpdateWithoutTimesheet_usersInput)
    update!: usersUpdateWithoutTimesheet_usersInput;

    @Field(() => usersCreateWithoutTimesheet_usersInput, {nullable:false})
    @Type(() => usersCreateWithoutTimesheet_usersInput)
    create!: usersCreateWithoutTimesheet_usersInput;
}
