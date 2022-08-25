import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { organizationOrderByWithRelationInput } from '../organization/organization-order-by-with-relation.input';
import { usersOrderByWithRelationInput } from '../users/users-order-by-with-relation.input';

@InputType()
export class terminalsOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    active?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    phone?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    address?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    latitude?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    longitude?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    external_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    organization_id?: keyof typeof SortOrder;

    @Field(() => organizationOrderByWithRelationInput, {nullable:true})
    organization?: organizationOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_by?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_by?: keyof typeof SortOrder;

    @Field(() => usersOrderByWithRelationInput, {nullable:true})
    terminals_created_byTousers?: usersOrderByWithRelationInput;

    @Field(() => usersOrderByWithRelationInput, {nullable:true})
    terminals_updated_byTousers?: usersOrderByWithRelationInput;
}
