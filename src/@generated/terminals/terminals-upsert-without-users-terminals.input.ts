import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { terminalsUpdateWithoutUsers_terminalsInput } from './terminals-update-without-users-terminals.input';
import { Type } from 'class-transformer';
import { terminalsCreateWithoutUsers_terminalsInput } from './terminals-create-without-users-terminals.input';

@InputType()
export class terminalsUpsertWithoutUsers_terminalsInput {

    @Field(() => terminalsUpdateWithoutUsers_terminalsInput, {nullable:false})
    @Type(() => terminalsUpdateWithoutUsers_terminalsInput)
    update!: terminalsUpdateWithoutUsers_terminalsInput;

    @Field(() => terminalsCreateWithoutUsers_terminalsInput, {nullable:false})
    @Type(() => terminalsCreateWithoutUsers_terminalsInput)
    create!: terminalsCreateWithoutUsers_terminalsInput;
}
