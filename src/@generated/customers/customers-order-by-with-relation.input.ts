import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { customers_commentsOrderByRelationAggregateInput } from '../customers-comments/customers-comments-order-by-relation-aggregate.input';

@InputType()
export class customersOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    phone?: keyof typeof SortOrder;

    @Field(() => customers_commentsOrderByRelationAggregateInput, {nullable:true})
    customers_comments_customers?: customers_commentsOrderByRelationAggregateInput;
}
