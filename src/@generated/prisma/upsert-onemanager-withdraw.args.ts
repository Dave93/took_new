import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { manager_withdrawWhereUniqueInput } from '../manager-withdraw/manager-withdraw-where-unique.input';
import { Type } from 'class-transformer';
import { manager_withdrawCreateInput } from '../manager-withdraw/manager-withdraw-create.input';
import { manager_withdrawUpdateInput } from '../manager-withdraw/manager-withdraw-update.input';

@ArgsType()
export class UpsertOnemanagerWithdrawArgs {

    @Field(() => manager_withdrawWhereUniqueInput, {nullable:false})
    @Type(() => manager_withdrawWhereUniqueInput)
    where!: manager_withdrawWhereUniqueInput;

    @Field(() => manager_withdrawCreateInput, {nullable:false})
    @Type(() => manager_withdrawCreateInput)
    create!: manager_withdrawCreateInput;

    @Field(() => manager_withdrawUpdateInput, {nullable:false})
    @Type(() => manager_withdrawUpdateInput)
    update!: manager_withdrawUpdateInput;
}
