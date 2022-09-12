import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { usersOrderByWithRelationInput } from '../users/users-order-by-with-relation.input';
import { ordersOrderByWithRelationInput } from '../orders/orders-order-by-with-relation.input';
import { terminalsOrderByWithRelationInput } from '../terminals/terminals-order-by-with-relation.input';

@InputType()
export class order_locationsOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    order_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    terminal_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    courier_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    lat?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    lon?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_by?: keyof typeof SortOrder;

    @Field(() => usersOrderByWithRelationInput, {nullable:true})
    order_locations_created_byTousers?: usersOrderByWithRelationInput;

    @Field(() => ordersOrderByWithRelationInput, {nullable:true})
    order_locations_orders?: ordersOrderByWithRelationInput;

    @Field(() => terminalsOrderByWithRelationInput, {nullable:true})
    order_locations_terminals?: terminalsOrderByWithRelationInput;

    @Field(() => usersOrderByWithRelationInput, {nullable:true})
    order_locations_couriers?: usersOrderByWithRelationInput;
}
