import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { usersOrderByWithRelationInput } from '../users/users-order-by-with-relation.input';
import { ordersOrderByWithRelationInput } from '../orders/orders-order-by-with-relation.input';
import { terminalsOrderByWithRelationInput } from '../terminals/terminals-order-by-with-relation.input';

@InputType()
export class order_votesOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    order_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    terminal_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    courier_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    is_voting?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    is_chosen?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_by?: keyof typeof SortOrder;

    @Field(() => usersOrderByWithRelationInput, {nullable:true})
    order_votes_created_byTousers?: usersOrderByWithRelationInput;

    @Field(() => ordersOrderByWithRelationInput, {nullable:true})
    order_votes_orders?: ordersOrderByWithRelationInput;

    @Field(() => terminalsOrderByWithRelationInput, {nullable:true})
    order_votes_terminals?: terminalsOrderByWithRelationInput;

    @Field(() => usersOrderByWithRelationInput, {nullable:true})
    order_votes_couriers?: usersOrderByWithRelationInput;
}
