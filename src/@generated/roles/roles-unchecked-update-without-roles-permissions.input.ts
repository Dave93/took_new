import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { users_rolesUncheckedUpdateManyWithoutRolesNestedInput } from '../users-roles/users-roles-unchecked-update-many-without-roles-nested.input';

@InputType()
export class rolesUncheckedUpdateWithoutRoles_permissionsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    code?: string;

    @Field(() => Boolean, {nullable:true})
    active?: boolean;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => String, {nullable:true})
    created_by?: string;

    @Field(() => String, {nullable:true})
    updated_by?: string;

    @Field(() => users_rolesUncheckedUpdateManyWithoutRolesNestedInput, {nullable:true})
    users_roles?: users_rolesUncheckedUpdateManyWithoutRolesNestedInput;
}
