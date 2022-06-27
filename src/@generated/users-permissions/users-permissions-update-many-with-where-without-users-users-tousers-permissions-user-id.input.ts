import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { users_permissionsScalarWhereInput } from './users-permissions-scalar-where.input';
import { Type } from 'class-transformer';
import { users_permissionsUncheckedUpdateManyWithoutUsers_permissions_usersTousers_permissions_user_idInput } from './users-permissions-unchecked-update-many-without-users-permissions-users-tousers-permissions-user-id.input';

@InputType()
export class users_permissionsUpdateManyWithWhereWithoutUsers_usersTousers_permissions_user_idInput {

    @Field(() => users_permissionsScalarWhereInput, {nullable:false})
    @Type(() => users_permissionsScalarWhereInput)
    where!: users_permissionsScalarWhereInput;

    @Field(() => users_permissionsUncheckedUpdateManyWithoutUsers_permissions_usersTousers_permissions_user_idInput, {nullable:false})
    @Type(() => users_permissionsUncheckedUpdateManyWithoutUsers_permissions_usersTousers_permissions_user_idInput)
    data!: users_permissionsUncheckedUpdateManyWithoutUsers_permissions_usersTousers_permissions_user_idInput;
}
