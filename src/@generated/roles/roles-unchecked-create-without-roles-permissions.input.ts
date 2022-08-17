import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { users_rolesUncheckedCreateNestedManyWithoutRolesInput } from '../users-roles/users-roles-unchecked-create-nested-many-without-roles.input';

@InputType()
export class rolesUncheckedCreateWithoutRoles_permissionsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

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

    @Field(() => users_rolesUncheckedCreateNestedManyWithoutRolesInput, {nullable:true})
    users_roles?: users_rolesUncheckedCreateNestedManyWithoutRolesInput;
}
