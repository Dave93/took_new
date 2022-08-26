import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { users_terminalsUpdateInput } from '../users-terminals/users-terminals-update.input';
import { Type } from 'class-transformer';
import { users_terminalsWhereUniqueInput } from '../users-terminals/users-terminals-where-unique.input';

@ArgsType()
export class UpdateOneusersTerminalsArgs {

    @Field(() => users_terminalsUpdateInput, {nullable:false})
    @Type(() => users_terminalsUpdateInput)
    data!: users_terminalsUpdateInput;

    @Field(() => users_terminalsWhereUniqueInput, {nullable:false})
    @Type(() => users_terminalsWhereUniqueInput)
    where!: users_terminalsWhereUniqueInput;
}
