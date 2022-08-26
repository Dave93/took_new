import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { users_terminalsWhereUniqueInput } from './users-terminals-where-unique.input';
import { Type } from 'class-transformer';
import { users_terminalsCreateWithoutTerminalsInput } from './users-terminals-create-without-terminals.input';

@InputType()
export class users_terminalsCreateOrConnectWithoutTerminalsInput {

    @Field(() => users_terminalsWhereUniqueInput, {nullable:false})
    @Type(() => users_terminalsWhereUniqueInput)
    where!: users_terminalsWhereUniqueInput;

    @Field(() => users_terminalsCreateWithoutTerminalsInput, {nullable:false})
    @Type(() => users_terminalsCreateWithoutTerminalsInput)
    create!: users_terminalsCreateWithoutTerminalsInput;
}
