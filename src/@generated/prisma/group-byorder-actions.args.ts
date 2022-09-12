import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { order_actionsWhereInput } from '../order-actions/order-actions-where.input';
import { Type } from 'class-transformer';
import { order_actionsOrderByWithAggregationInput } from '../order-actions/order-actions-order-by-with-aggregation.input';
import { Order_actionsScalarFieldEnum } from './order-actions-scalar-field.enum';
import { order_actionsScalarWhereWithAggregatesInput } from '../order-actions/order-actions-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupByorderActionsArgs {

    @Field(() => order_actionsWhereInput, {nullable:true})
    @Type(() => order_actionsWhereInput)
    where?: order_actionsWhereInput;

    @Field(() => [order_actionsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<order_actionsOrderByWithAggregationInput>;

    @Field(() => [Order_actionsScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Order_actionsScalarFieldEnum>;

    @Field(() => order_actionsScalarWhereWithAggregatesInput, {nullable:true})
    having?: order_actionsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
