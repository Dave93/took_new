import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersWhereUniqueInput } from './users-where-unique.input';
import { Type } from 'class-transformer';
import { usersCreateWithoutTimesheet_usersInput } from './users-create-without-timesheet-users.input';

@InputType()
export class usersCreateOrConnectWithoutTimesheet_usersInput {

    @Field(() => usersWhereUniqueInput, {nullable:false})
    @Type(() => usersWhereUniqueInput)
    where!: usersWhereUniqueInput;

    @Field(() => usersCreateWithoutTimesheet_usersInput, {nullable:false})
    @Type(() => usersCreateWithoutTimesheet_usersInput)
    create!: usersCreateWithoutTimesheet_usersInput;
}
