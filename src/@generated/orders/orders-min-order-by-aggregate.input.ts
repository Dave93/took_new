import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class ordersMinOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    organization_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    customer_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    courier_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    terminal_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    order_status_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    delivery_type?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    from_lat?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    from_lon?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    to_lat?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    to_lon?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    pre_distance?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    pre_duration?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    order_number?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    distance?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    duration?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    order_price?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    delivery_price?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    delivery_address?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    finished_date?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    delivery_comment?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    payment_type?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    cancel_reason?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    sms_sent_to_customer?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    delivery_pricing_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_by?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_by?: keyof typeof SortOrder;
}
