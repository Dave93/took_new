import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { manager_withdrawUpdateInput } from '../manager-withdraw/manager-withdraw-update.input';
import { Type } from 'class-transformer';
import { manager_withdrawWhereUniqueInput } from '../manager-withdraw/manager-withdraw-where-unique.input';

@ArgsType()
export class UpdateOnemanagerWithdrawArgs {

    @Field(() => manager_withdrawUpdateInput, {nullable:false})
    @Type(() => manager_withdrawUpdateInput)
    data!: manager_withdrawUpdateInput;

    @Field(() => manager_withdrawWhereUniqueInput, {nullable:false})
    @Type(() => manager_withdrawWhereUniqueInput)
    where!: manager_withdrawWhereUniqueInput;
}
