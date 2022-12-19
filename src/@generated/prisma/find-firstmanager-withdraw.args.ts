import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { manager_withdrawWhereInput } from '../manager-withdraw/manager-withdraw-where.input';
import { Type } from 'class-transformer';
import { manager_withdrawOrderByWithRelationInput } from '../manager-withdraw/manager-withdraw-order-by-with-relation.input';
import { manager_withdrawWhereUniqueInput } from '../manager-withdraw/manager-withdraw-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Manager_withdrawScalarFieldEnum } from './manager-withdraw-scalar-field.enum';

@ArgsType()
export class FindFirstmanagerWithdrawArgs {

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

    @Field(() => [Manager_withdrawScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof Manager_withdrawScalarFieldEnum>;
}
