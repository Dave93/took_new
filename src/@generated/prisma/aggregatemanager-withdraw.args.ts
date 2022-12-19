import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { manager_withdrawWhereInput } from '../manager-withdraw/manager-withdraw-where.input';
import { Type } from 'class-transformer';
import { manager_withdrawOrderByWithRelationInput } from '../manager-withdraw/manager-withdraw-order-by-with-relation.input';
import { manager_withdrawWhereUniqueInput } from '../manager-withdraw/manager-withdraw-where-unique.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class AggregatemanagerWithdrawArgs {

    @Field(() => manager_withdrawWhereInput, {nullable:true})
    @Type(() => manager_withdrawWhereInput)
    where?: manager_withdrawWhereInput;

    @Field(() => [manager_withdrawOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<manager_withdrawOrderByWithRelationInput>;

    @Field(() => manager_withdrawWhereUniqueInput, {nullable:true})
    cursor?: manager_withdrawWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
