import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { manager_withdrawCreateInput } from '../manager-withdraw/manager-withdraw-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnemanagerWithdrawArgs {

    @Field(() => manager_withdrawCreateInput, {nullable:false})
    @Type(() => manager_withdrawCreateInput)
    data!: manager_withdrawCreateInput;
}
