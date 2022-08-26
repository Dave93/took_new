import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { users_work_schedulesCountOrderByAggregateInput } from './users-work-schedules-count-order-by-aggregate.input';
import { users_work_schedulesMaxOrderByAggregateInput } from './users-work-schedules-max-order-by-aggregate.input';
import { users_work_schedulesMinOrderByAggregateInput } from './users-work-schedules-min-order-by-aggregate.input';

@InputType()
export class users_work_schedulesOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    user_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    work_schedule_id?: keyof typeof SortOrder;

    @Field(() => users_work_schedulesCountOrderByAggregateInput, {nullable:true})
    _count?: users_work_schedulesCountOrderByAggregateInput;

    @Field(() => users_work_schedulesMaxOrderByAggregateInput, {nullable:true})
    _max?: users_work_schedulesMaxOrderByAggregateInput;

    @Field(() => users_work_schedulesMinOrderByAggregateInput, {nullable:true})
    _min?: users_work_schedulesMinOrderByAggregateInput;
}
