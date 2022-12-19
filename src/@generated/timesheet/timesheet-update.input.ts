import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersUpdateOneRequiredWithoutTimesheet_usersNestedInput } from '../users/users-update-one-required-without-timesheet-users-nested.input';

@InputType()
export class timesheetUpdateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Boolean, {nullable:true})
    is_late?: boolean;

    @Field(() => Date, {nullable:true})
    date?: Date | string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => usersUpdateOneRequiredWithoutTimesheet_usersNestedInput, {nullable:true})
    timesheet_users?: usersUpdateOneRequiredWithoutTimesheet_usersNestedInput;
}
