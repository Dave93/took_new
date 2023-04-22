import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { scheduled_reportsOrderByWithRelationInput } from '../scheduled-reports/scheduled-reports-order-by-with-relation.input';
import { usersOrderByWithRelationInput } from '../users/users-order-by-with-relation.input';

@InputType()
export class scheduled_reports_subscriptionOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    report_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    user_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: keyof typeof SortOrder;

    @Field(() => scheduled_reportsOrderByWithRelationInput, {nullable:true})
    scheduled_reports_subscription_reports?: scheduled_reportsOrderByWithRelationInput;

    @Field(() => usersOrderByWithRelationInput, {nullable:true})
    scheduled_reports_subscription_users?: usersOrderByWithRelationInput;
}
