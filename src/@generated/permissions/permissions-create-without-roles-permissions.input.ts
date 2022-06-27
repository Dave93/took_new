import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersCreateNestedOneWithoutPermissions_permissions_created_byTousersInput } from '../users/users-create-nested-one-without-permissions-permissions-created-by-tousers.input';
import { usersCreateNestedOneWithoutPermissions_permissions_updated_byTousersInput } from '../users/users-create-nested-one-without-permissions-permissions-updated-by-tousers.input';
import { users_permissionsCreateNestedManyWithoutPermissionsInput } from '../users-permissions/users-permissions-create-nested-many-without-permissions.input';

@InputType()
export class permissionsCreateWithoutRoles_permissionsInput {

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Boolean, {nullable:true})
    active?: boolean;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => usersCreateNestedOneWithoutPermissions_permissions_created_byTousersInput, {nullable:true})
    users_permissions_created_byTousers?: usersCreateNestedOneWithoutPermissions_permissions_created_byTousersInput;

    @Field(() => usersCreateNestedOneWithoutPermissions_permissions_updated_byTousersInput, {nullable:true})
    users_permissions_updated_byTousers?: usersCreateNestedOneWithoutPermissions_permissions_updated_byTousersInput;

    @Field(() => users_permissionsCreateNestedManyWithoutPermissionsInput, {nullable:true})
    users_permissions?: users_permissionsCreateNestedManyWithoutPermissionsInput;
}
