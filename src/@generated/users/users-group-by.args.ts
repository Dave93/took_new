import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { usersWhereInput } from './users-where.input';
import { Type } from 'class-transformer';
import { usersOrderByWithAggregationInput } from './users-order-by-with-aggregation.input';
import { UsersScalarFieldEnum } from '../prisma/users-scalar-field.enum';
import { usersScalarWhereWithAggregatesInput } from './users-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class usersGroupByArgs {

    @Field(() => usersWhereInput, {nullable:true})
    @Type(() => usersWhereInput)
    where?: usersWhereInput;

    @Field(() => [usersOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<usersOrderByWithAggregationInput>;

    @Field(() => [UsersScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof UsersScalarFieldEnum>;

    @Field(() => usersScalarWhereWithAggregatesInput, {nullable:true})
    having?: usersScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
