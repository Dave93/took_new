import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { manager_withdrawUpdateManyMutationInput } from '../manager-withdraw/manager-withdraw-update-many-mutation.input';
import { Type } from 'class-transformer';
import { manager_withdrawWhereInput } from '../manager-withdraw/manager-withdraw-where.input';

@ArgsType()
export class UpdateManymanagerWithdrawArgs {

    @Field(() => manager_withdrawUpdateManyMutationInput, {nullable:false})
    @Type(() => manager_withdrawUpdateManyMutationInput)
    data!: manager_withdrawUpdateManyMutationInput;

    @Field(() => manager_withdrawWhereInput, {nullable:true})
    @Type(() => manager_withdrawWhereInput)
    where?: manager_withdrawWhereInput;
}
