import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { users_terminalsWhereUniqueInput } from './users-terminals-where-unique.input';
import { Type } from 'class-transformer';
import { users_terminalsUpdateWithoutTerminalsInput } from './users-terminals-update-without-terminals.input';

@InputType()
export class users_terminalsUpdateWithWhereUniqueWithoutTerminalsInput {

    @Field(() => users_terminalsWhereUniqueInput, {nullable:false})
    @Type(() => users_terminalsWhereUniqueInput)
    where!: users_terminalsWhereUniqueInput;

    @Field(() => users_terminalsUpdateWithoutTerminalsInput, {nullable:false})
    @Type(() => users_terminalsUpdateWithoutTerminalsInput)
    data!: users_terminalsUpdateWithoutTerminalsInput;
}
