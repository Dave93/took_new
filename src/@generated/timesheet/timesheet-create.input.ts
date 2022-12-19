import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersCreateNestedOneWithoutTimesheet_usersInput } from '../users/users-create-nested-one-without-timesheet-users.input';

@InputType()
export class timesheetCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Boolean, {nullable:true})
    is_late?: boolean;

    @Field(() => Date, {nullable:false})
    date!: Date | string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => usersCreateNestedOneWithoutTimesheet_usersInput, {nullable:false})
    timesheet_users!: usersCreateNestedOneWithoutTimesheet_usersInput;
}
