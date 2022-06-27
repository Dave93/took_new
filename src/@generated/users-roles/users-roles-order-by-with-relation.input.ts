import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { usersOrderByWithRelationInput } from '../users/users-order-by-with-relation.input';
import { rolesOrderByWithRelationInput } from '../roles/roles-order-by-with-relation.input';

@InputType()
export class users_rolesOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    user_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    role_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_by?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_by?: keyof typeof SortOrder;

    @Field(() => usersOrderByWithRelationInput, {nullable:true})
    users_usersTousers_roles_created_by?: usersOrderByWithRelationInput;

    @Field(() => rolesOrderByWithRelationInput, {nullable:true})
    roles?: rolesOrderByWithRelationInput;

    @Field(() => usersOrderByWithRelationInput, {nullable:true})
    users_usersTousers_roles_updated_by?: usersOrderByWithRelationInput;

    @Field(() => usersOrderByWithRelationInput, {nullable:true})
    users_usersTousers_roles_user_id?: usersOrderByWithRelationInput;
}
