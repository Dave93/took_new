import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersUpdateOneWithoutPermissions_permissions_created_byTousersNestedInput } from '../users/users-update-one-without-permissions-permissions-created-by-tousers-nested.input';
import { usersUpdateOneWithoutPermissions_permissions_updated_byTousersNestedInput } from '../users/users-update-one-without-permissions-permissions-updated-by-tousers-nested.input';
import { roles_permissionsUpdateManyWithoutPermissionsNestedInput } from '../roles-permissions/roles-permissions-update-many-without-permissions-nested.input';
import { users_permissionsUpdateManyWithoutPermissionsNestedInput } from '../users-permissions/users-permissions-update-many-without-permissions-nested.input';

@InputType()
export class permissionsUpdateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    slug?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Boolean, {nullable:true})
    active?: boolean;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => usersUpdateOneWithoutPermissions_permissions_created_byTousersNestedInput, {nullable:true})
    users_permissions_created_byTousers?: usersUpdateOneWithoutPermissions_permissions_created_byTousersNestedInput;

    @Field(() => usersUpdateOneWithoutPermissions_permissions_updated_byTousersNestedInput, {nullable:true})
    users_permissions_updated_byTousers?: usersUpdateOneWithoutPermissions_permissions_updated_byTousersNestedInput;

    @Field(() => roles_permissionsUpdateManyWithoutPermissionsNestedInput, {nullable:true})
    roles_permissions?: roles_permissionsUpdateManyWithoutPermissionsNestedInput;

    @Field(() => users_permissionsUpdateManyWithoutPermissionsNestedInput, {nullable:true})
    users_permissions?: users_permissionsUpdateManyWithoutPermissionsNestedInput;
}
