import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { usersOrderByWithRelationInput } from '../users/users-order-by-with-relation.input';
import { terminalsOrderByWithRelationInput } from '../terminals/terminals-order-by-with-relation.input';
import { organizationOrderByWithRelationInput } from '../organization/organization-order-by-with-relation.input';

@InputType()
export class order_bonus_pricingOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    active?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    start_time?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    end_time?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    rules?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    min_distance_km?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    organization_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    terminal_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    courier_id?: keyof typeof SortOrder;

    @Field(() => usersOrderByWithRelationInput, {nullable:true})
    courier?: usersOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_by?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_by?: keyof typeof SortOrder;

    @Field(() => usersOrderByWithRelationInput, {nullable:true})
    users_order_bonus_pricing_created_byTousers?: usersOrderByWithRelationInput;

    @Field(() => usersOrderByWithRelationInput, {nullable:true})
    users_order_bonus_pricing_updated_byTousers?: usersOrderByWithRelationInput;

    @Field(() => terminalsOrderByWithRelationInput, {nullable:true})
    terminals?: terminalsOrderByWithRelationInput;

    @Field(() => organizationOrderByWithRelationInput, {nullable:true})
    organization?: organizationOrderByWithRelationInput;
}
