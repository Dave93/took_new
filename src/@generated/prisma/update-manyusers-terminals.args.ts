import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { users_terminalsUncheckedUpdateManyInput } from '../users-terminals/users-terminals-unchecked-update-many.input';
import { Type } from 'class-transformer';
import { users_terminalsWhereInput } from '../users-terminals/users-terminals-where.input';

@ArgsType()
export class UpdateManyusersTerminalsArgs {

    @Field(() => users_terminalsUncheckedUpdateManyInput, {nullable:false})
    @Type(() => users_terminalsUncheckedUpdateManyInput)
    data!: users_terminalsUncheckedUpdateManyInput;

    @Field(() => users_terminalsWhereInput, {nullable:true})
    @Type(() => users_terminalsWhereInput)
    where?: users_terminalsWhereInput;
}
