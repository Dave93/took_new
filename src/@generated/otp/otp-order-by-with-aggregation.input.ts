import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { otpCountOrderByAggregateInput } from './otp-count-order-by-aggregate.input';
import { otpMaxOrderByAggregateInput } from './otp-max-order-by-aggregate.input';
import { otpMinOrderByAggregateInput } from './otp-min-order-by-aggregate.input';

@InputType()
export class otpOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    user_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    otp?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    expiry_date?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    verified?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: keyof typeof SortOrder;

    @Field(() => otpCountOrderByAggregateInput, {nullable:true})
    _count?: otpCountOrderByAggregateInput;

    @Field(() => otpMaxOrderByAggregateInput, {nullable:true})
    _max?: otpMaxOrderByAggregateInput;

    @Field(() => otpMinOrderByAggregateInput, {nullable:true})
    _min?: otpMinOrderByAggregateInput;
}
