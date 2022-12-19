import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { manager_withdrawWhereUniqueInput } from '../manager-withdraw/manager-withdraw-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquemanagerWithdrawArgs {

    @Field(() => manager_withdrawWhereUniqueInput, {nullable:false})
    @Type(() => manager_withdrawWhereUniqueInput)
    where!: manager_withdrawWhereUniqueInput;
}
