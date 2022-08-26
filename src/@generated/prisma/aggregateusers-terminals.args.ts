import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { users_terminalsWhereInput } from '../users-terminals/users-terminals-where.input';
import { Type } from 'class-transformer';
import { users_terminalsOrderByWithRelationInput } from '../users-terminals/users-terminals-order-by-with-relation.input';
import { users_terminalsWhereUniqueInput } from '../users-terminals/users-terminals-where-unique.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class AggregateusersTerminalsArgs {

    @Field(() => users_terminalsWhereInput, {nullable:true})
    @Type(() => users_terminalsWhereInput)
    where?: users_terminalsWhereInput;

    @Field(() => [users_terminalsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<users_terminalsOrderByWithRelationInput>;

    @Field(() => users_terminalsWhereUniqueInput, {nullable:true})
    cursor?: users_terminalsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
