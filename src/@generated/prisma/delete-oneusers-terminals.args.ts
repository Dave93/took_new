import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { users_terminalsWhereUniqueInput } from '../users-terminals/users-terminals-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneusersTerminalsArgs {

    @Field(() => users_terminalsWhereUniqueInput, {nullable:false})
    @Type(() => users_terminalsWhereUniqueInput)
    where!: users_terminalsWhereUniqueInput;
}
