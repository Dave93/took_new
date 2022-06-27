import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersCreateNestedOneWithoutRoles_roles_created_byTousersInput } from '../users/users-create-nested-one-without-roles-roles-created-by-tousers.input';
import { usersCreateNestedOneWithoutRoles_roles_updated_byTousersInput } from '../users/users-create-nested-one-without-roles-roles-updated-by-tousers.input';
import { users_rolesCreateNestedManyWithoutRolesInput } from '../users-roles/users-roles-create-nested-many-without-roles.input';

@InputType()
export class rolesCreateWithoutRoles_permissionsInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Boolean, {nullable:true})
    active?: boolean;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => usersCreateNestedOneWithoutRoles_roles_created_byTousersInput, {nullable:true})
    users_roles_created_byTousers?: usersCreateNestedOneWithoutRoles_roles_created_byTousersInput;

    @Field(() => usersCreateNestedOneWithoutRoles_roles_updated_byTousersInput, {nullable:true})
    users_roles_updated_byTousers?: usersCreateNestedOneWithoutRoles_roles_updated_byTousersInput;

    @Field(() => users_rolesCreateNestedManyWithoutRolesInput, {nullable:true})
    users_roles?: users_rolesCreateNestedManyWithoutRolesInput;
}
