import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { usersOrderByWithRelationInput } from '../users/users-order-by-with-relation.input';
import { work_schedulesOrderByWithRelationInput } from '../work-schedules/work-schedules-order-by-with-relation.input';

@InputType()
export class users_work_schedulesOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    user_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    work_schedule_id?: keyof typeof SortOrder;

    @Field(() => usersOrderByWithRelationInput, {nullable:true})
    users?: usersOrderByWithRelationInput;

    @Field(() => work_schedulesOrderByWithRelationInput, {nullable:true})
    work_schedules?: work_schedulesOrderByWithRelationInput;
}
