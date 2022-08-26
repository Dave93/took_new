import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { users_terminalsWhereUniqueInput } from './users-terminals-where-unique.input';
import { Type } from 'class-transformer';
import { users_terminalsUpdateWithoutTerminalsInput } from './users-terminals-update-without-terminals.input';
import { users_terminalsCreateWithoutTerminalsInput } from './users-terminals-create-without-terminals.input';

@InputType()
export class users_terminalsUpsertWithWhereUniqueWithoutTerminalsInput {

    @Field(() => users_terminalsWhereUniqueInput, {nullable:false})
    @Type(() => users_terminalsWhereUniqueInput)
    where!: users_terminalsWhereUniqueInput;

    @Field(() => users_terminalsUpdateWithoutTerminalsInput, {nullable:false})
    @Type(() => users_terminalsUpdateWithoutTerminalsInput)
    update!: users_terminalsUpdateWithoutTerminalsInput;

    @Field(() => users_terminalsCreateWithoutTerminalsInput, {nullable:false})
    @Type(() => users_terminalsCreateWithoutTerminalsInput)
    create!: users_terminalsCreateWithoutTerminalsInput;
}
