import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { roles_permissionsUncheckedCreateNestedManyWithoutPermissionsInput } from '../roles-permissions/roles-permissions-unchecked-create-nested-many-without-permissions.input';
import { users_permissionsUncheckedCreateNestedManyWithoutPermissionsInput } from '../users-permissions/users-permissions-unchecked-create-nested-many-without-permissions.input';

@InputType()
export class permissionsUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

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

    @Field(() => String, {nullable:true})
    created_by?: string;

    @Field(() => String, {nullable:true})
    updated_by?: string;

    @Field(() => roles_permissionsUncheckedCreateNestedManyWithoutPermissionsInput, {nullable:true})
    roles_permissions?: roles_permissionsUncheckedCreateNestedManyWithoutPermissionsInput;

    @Field(() => users_permissionsUncheckedCreateNestedManyWithoutPermissionsInput, {nullable:true})
    users_permissions?: users_permissionsUncheckedCreateNestedManyWithoutPermissionsInput;
}
