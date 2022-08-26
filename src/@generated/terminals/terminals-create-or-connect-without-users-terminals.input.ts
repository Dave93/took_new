import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { terminalsWhereUniqueInput } from './terminals-where-unique.input';
import { Type } from 'class-transformer';
import { terminalsCreateWithoutUsers_terminalsInput } from './terminals-create-without-users-terminals.input';

@InputType()
export class terminalsCreateOrConnectWithoutUsers_terminalsInput {

    @Field(() => terminalsWhereUniqueInput, {nullable:false})
    @Type(() => terminalsWhereUniqueInput)
    where!: terminalsWhereUniqueInput;

    @Field(() => terminalsCreateWithoutUsers_terminalsInput, {nullable:false})
    @Type(() => terminalsCreateWithoutUsers_terminalsInput)
    create!: terminalsCreateWithoutUsers_terminalsInput;
}
