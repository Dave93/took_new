import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { order_statusWhereInput } from '../order-status/order-status-where.input';
import { Type } from 'class-transformer';
import { order_statusOrderByWithRelationInput } from '../order-status/order-status-order-by-with-relation.input';
import { order_statusWhereUniqueInput } from '../order-status/order-status-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Order_statusScalarFieldEnum } from './order-status-scalar-field.enum';

@ArgsType()
export class FindFirstorderStatusArgs {

    @Field(() => order_statusWhereInput, {nullable:true})
    @Type(() => order_statusWhereInput)
    where?: order_statusWhereInput;

    @Field(() => [order_statusOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<order_statusOrderByWithRelationInput>;

    @Field(() => order_statusWhereUniqueInput, {nullable:true})
    cursor?: order_statusWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [Order_statusScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof Order_statusScalarFieldEnum>;
}
