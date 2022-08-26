import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { users_terminalsScalarWhereInput } from './users-terminals-scalar-where.input';
import { Type } from 'class-transformer';
import { users_terminalsUncheckedUpdateManyWithoutUsers_terminalsInput } from './users-terminals-unchecked-update-many-without-users-terminals.input';

@InputType()
export class users_terminalsUpdateManyWithWhereWithoutUsersInput {

    @Field(() => users_terminalsScalarWhereInput, {nullable:false})
    @Type(() => users_terminalsScalarWhereInput)
    where!: users_terminalsScalarWhereInput;

    @Field(() => users_terminalsUncheckedUpdateManyWithoutUsers_terminalsInput, {nullable:false})
    @Type(() => users_terminalsUncheckedUpdateManyWithoutUsers_terminalsInput)
    data!: users_terminalsUncheckedUpdateManyWithoutUsers_terminalsInput;
}
