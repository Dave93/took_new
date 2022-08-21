import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { users_permissionsUncheckedUpdateManyWithoutPermissionsNestedInput } from '../users-permissions/users-permissions-unchecked-update-many-without-permissions-nested.input';

@InputType()
export class permissionsUncheckedUpdateWithoutRoles_permissionsInput {

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
    created_by?: string;

    @Field(() => String, {nullable:true})
    updated_by?: string;

    @Field(() => users_permissionsUncheckedUpdateManyWithoutPermissionsNestedInput, {nullable:true})
    users_permissions?: users_permissionsUncheckedUpdateManyWithoutPermissionsNestedInput;
}
