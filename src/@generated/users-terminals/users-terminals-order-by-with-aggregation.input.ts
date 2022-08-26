import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { users_terminalsCountOrderByAggregateInput } from './users-terminals-count-order-by-aggregate.input';
import { users_terminalsMaxOrderByAggregateInput } from './users-terminals-max-order-by-aggregate.input';
import { users_terminalsMinOrderByAggregateInput } from './users-terminals-min-order-by-aggregate.input';

@InputType()
export class users_terminalsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    user_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    terminal_id?: keyof typeof SortOrder;

    @Field(() => users_terminalsCountOrderByAggregateInput, {nullable:true})
    _count?: users_terminalsCountOrderByAggregateInput;

    @Field(() => users_terminalsMaxOrderByAggregateInput, {nullable:true})
    _max?: users_terminalsMaxOrderByAggregateInput;

    @Field(() => users_terminalsMinOrderByAggregateInput, {nullable:true})
    _min?: users_terminalsMinOrderByAggregateInput;
}
