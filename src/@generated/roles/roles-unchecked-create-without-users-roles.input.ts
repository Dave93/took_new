import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { roles_permissionsUncheckedCreateNestedManyWithoutRolesInput } from '../roles-permissions/roles-permissions-unchecked-create-nested-many-without-roles.input';

@InputType()
export class rolesUncheckedCreateWithoutUsers_rolesInput {

    @Field(() => Int, {nullable:true})
    id?: number;

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

    @Field(() => roles_permissionsUncheckedCreateNestedManyWithoutRolesInput, {nullable:true})
    roles_permissions?: roles_permissionsUncheckedCreateNestedManyWithoutRolesInput;
}
