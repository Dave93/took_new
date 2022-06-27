import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { usersOrderByWithRelationInput } from '../users/users-order-by-with-relation.input';
import { permissionsOrderByWithRelationInput } from '../permissions/permissions-order-by-with-relation.input';

@InputType()
export class users_permissionsOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    user_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    permission_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_by?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_by?: keyof typeof SortOrder;

    @Field(() => usersOrderByWithRelationInput, {nullable:true})
    users_usersTousers_permissions_created_by?: usersOrderByWithRelationInput;

    @Field(() => permissionsOrderByWithRelationInput, {nullable:true})
    permissions?: permissionsOrderByWithRelationInput;

    @Field(() => usersOrderByWithRelationInput, {nullable:true})
    users_usersTousers_permissions_updated_by?: usersOrderByWithRelationInput;

    @Field(() => usersOrderByWithRelationInput, {nullable:true})
    users_usersTousers_permissions_user_id?: usersOrderByWithRelationInput;
}
