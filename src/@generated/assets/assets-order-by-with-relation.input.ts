import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { customers_commentsOrderByRelationAggregateInput } from '../customers-comments/customers-comments-order-by-relation-aggregate.input';
import { ordersOrderByRelationAggregateInput } from '../orders/orders-order-by-relation-aggregate.input';

@InputType()
export class assetsOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    model?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    file_name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    model_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    sub_folder?: keyof typeof SortOrder;

    @Field(() => customers_commentsOrderByRelationAggregateInput, {nullable:true})
    customers_comments_voice_idToassets?: customers_commentsOrderByRelationAggregateInput;

    @Field(() => customers_commentsOrderByRelationAggregateInput, {nullable:true})
    customers_comments_image_idToassets?: customers_commentsOrderByRelationAggregateInput;

    @Field(() => ordersOrderByRelationAggregateInput, {nullable:true})
    orders_voice_idToassets?: ordersOrderByRelationAggregateInput;
}
