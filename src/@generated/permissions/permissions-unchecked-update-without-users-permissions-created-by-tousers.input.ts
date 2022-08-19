import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { roles_permissionsUncheckedUpdateManyWithoutPermissionsNestedInput } from '../roles-permissions/roles-permissions-unchecked-update-many-without-permissions-nested.input';
import { users_permissionsUncheckedUpdateManyWithoutPermissionsNestedInput } from '../users-permissions/users-permissions-unchecked-update-many-without-permissions-nested.input';

@InputType()
export class permissionsUncheckedUpdateWithoutUsers_permissions_created_byTousersInput {

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

    @Field(() => String, {nullable:true})
    updated_by?: string;

    @Field(() => roles_permissionsUncheckedUpdateManyWithoutPermissionsNestedInput, {nullable:true})
    roles_permissions?: roles_permissionsUncheckedUpdateManyWithoutPermissionsNestedInput;

    @Field(() => users_permissionsUncheckedUpdateManyWithoutPermissionsNestedInput, {nullable:true})
    users_permissions?: users_permissionsUncheckedUpdateManyWithoutPermissionsNestedInput;
}
