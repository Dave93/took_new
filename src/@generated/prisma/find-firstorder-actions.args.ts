import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { order_actionsWhereInput } from '../order-actions/order-actions-where.input';
import { Type } from 'class-transformer';
import { order_actionsOrderByWithRelationInput } from '../order-actions/order-actions-order-by-with-relation.input';
import { order_actionsWhereUniqueInput } from '../order-actions/order-actions-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Order_actionsScalarFieldEnum } from './order-actions-scalar-field.enum';

@ArgsType()
export class FindFirstorderActionsArgs {

    @Field(() => order_actionsWhereInput, {nullable:true})
    @Type(() => order_actionsWhereInput)
    where?: order_actionsWhereInput;

    @Field(() => [order_actionsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<order_actionsOrderByWithRelationInput>;

    @Field(() => order_actionsWhereUniqueInput, {nullable:true})
    cursor?: order_actionsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [Order_actionsScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof Order_actionsScalarFieldEnum>;
}
