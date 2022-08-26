import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersUpdateWithoutUsers_terminalsInput } from './users-update-without-users-terminals.input';
import { Type } from 'class-transformer';
import { usersCreateWithoutUsers_terminalsInput } from './users-create-without-users-terminals.input';

@InputType()
export class usersUpsertWithoutUsers_terminalsInput {

    @Field(() => usersUpdateWithoutUsers_terminalsInput, {nullable:false})
    @Type(() => usersUpdateWithoutUsers_terminalsInput)
    update!: usersUpdateWithoutUsers_terminalsInput;

    @Field(() => usersCreateWithoutUsers_terminalsInput, {nullable:false})
    @Type(() => usersCreateWithoutUsers_terminalsInput)
    create!: usersCreateWithoutUsers_terminalsInput;
}
