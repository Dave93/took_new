import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { work_schedulesOrderByRelationAggregateInput } from '../work-schedules/work-schedules-order-by-relation-aggregate.input';
import { usersOrderByWithRelationInput } from '../users/users-order-by-with-relation.input';

@InputType()
export class organizationOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    external_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    active?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    system_type?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    phone?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    webhook?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    group_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    apelsin_login?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    apelsin_password?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    sender_name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    sender_number?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_by?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_by?: keyof typeof SortOrder;

    @Field(() => work_schedulesOrderByRelationAggregateInput, {nullable:true})
    work_schedules_organization_idTorganization?: work_schedulesOrderByRelationAggregateInput;

    @Field(() => usersOrderByWithRelationInput, {nullable:true})
    organization_created_byTousers?: usersOrderByWithRelationInput;

    @Field(() => usersOrderByWithRelationInput, {nullable:true})
    organization_updated_byTousers?: usersOrderByWithRelationInput;
}
