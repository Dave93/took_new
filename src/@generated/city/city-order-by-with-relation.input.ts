import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { usersOrderByWithRelationInput } from '../users/users-order-by-with-relation.input';
import { postOrderByRelationAggregateInput } from '../post/post-order-by-relation-aggregate.input';
import { cityOrderByRelationAggregateInput } from './city-order-by-relation-aggregate.input';

@InputType()
export class cityOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    parent_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_by?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_by?: keyof typeof SortOrder;

    @Field(() => usersOrderByWithRelationInput, {nullable:true})
    users_city_created_byTousers?: usersOrderByWithRelationInput;

    @Field(() => usersOrderByWithRelationInput, {nullable:true})
    users_city_updated_byTousers?: usersOrderByWithRelationInput;

    @Field(() => cityOrderByWithRelationInput, {nullable:true})
    users_city_parent_idTousers?: cityOrderByWithRelationInput;

    @Field(() => postOrderByRelationAggregateInput, {nullable:true})
    post_city_idTocity?: postOrderByRelationAggregateInput;

    @Field(() => cityOrderByRelationAggregateInput, {nullable:true})
    city_parent_idTocity?: cityOrderByRelationAggregateInput;
}
