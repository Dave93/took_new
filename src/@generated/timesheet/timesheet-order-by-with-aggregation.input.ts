import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { timesheetCountOrderByAggregateInput } from './timesheet-count-order-by-aggregate.input';
import { timesheetMaxOrderByAggregateInput } from './timesheet-max-order-by-aggregate.input';
import { timesheetMinOrderByAggregateInput } from './timesheet-min-order-by-aggregate.input';

@InputType()
export class timesheetOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    user_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    is_late?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    date?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: keyof typeof SortOrder;

    @Field(() => timesheetCountOrderByAggregateInput, {nullable:true})
    _count?: timesheetCountOrderByAggregateInput;

    @Field(() => timesheetMaxOrderByAggregateInput, {nullable:true})
    _max?: timesheetMaxOrderByAggregateInput;

    @Field(() => timesheetMinOrderByAggregateInput, {nullable:true})
    _min?: timesheetMinOrderByAggregateInput;
}
