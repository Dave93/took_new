import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { users_terminalsCreateInput } from '../users-terminals/users-terminals-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneusersTerminalsArgs {

    @Field(() => users_terminalsCreateInput, {nullable:false})
    @Type(() => users_terminalsCreateInput)
    data!: users_terminalsCreateInput;
}
