import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { users_terminalsWhereInput } from '../users-terminals/users-terminals-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyusersTerminalsArgs {

    @Field(() => users_terminalsWhereInput, {nullable:true})
    @Type(() => users_terminalsWhereInput)
    where?: users_terminalsWhereInput;
}
