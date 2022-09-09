import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ordersWhereInput } from './orders-where.input';
import { Type } from 'class-transformer';
import { ordersOrderByWithRelationInput } from './orders-order-by-with-relation.input';
import { ordersWhereUniqueInput } from './orders-where-unique.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class ordersAggregateArgs {

    @Field(() => ordersWhereInput, {nullable:true})
    @Type(() => ordersWhereInput)
    where?: ordersWhereInput;

    @Field(() => [ordersOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ordersOrderByWithRelationInput>;

    @Field(() => ordersWhereUniqueInput, {nullable:true})
    cursor?: ordersWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
