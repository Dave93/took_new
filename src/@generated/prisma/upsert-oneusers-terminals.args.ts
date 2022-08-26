import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { users_terminalsWhereUniqueInput } from '../users-terminals/users-terminals-where-unique.input';
import { Type } from 'class-transformer';
import { users_terminalsCreateInput } from '../users-terminals/users-terminals-create.input';
import { users_terminalsUpdateInput } from '../users-terminals/users-terminals-update.input';

@ArgsType()
export class UpsertOneusersTerminalsArgs {

    @Field(() => users_terminalsWhereUniqueInput, {nullable:false})
    @Type(() => users_terminalsWhereUniqueInput)
    where!: users_terminalsWhereUniqueInput;

    @Field(() => users_terminalsCreateInput, {nullable:false})
    @Type(() => users_terminalsCreateInput)
    create!: users_terminalsCreateInput;

    @Field(() => users_terminalsUpdateInput, {nullable:false})
    @Type(() => users_terminalsUpdateInput)
    update!: users_terminalsUpdateInput;
}
