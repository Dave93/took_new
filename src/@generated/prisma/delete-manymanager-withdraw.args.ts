import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { manager_withdrawWhereInput } from '../manager-withdraw/manager-withdraw-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManymanagerWithdrawArgs {

    @Field(() => manager_withdrawWhereInput, {nullable:true})
    @Type(() => manager_withdrawWhereInput)
    where?: manager_withdrawWhereInput;
}
