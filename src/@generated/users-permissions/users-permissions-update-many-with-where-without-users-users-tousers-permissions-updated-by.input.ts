import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { users_permissionsScalarWhereInput } from './users-permissions-scalar-where.input';
import { Type } from 'class-transformer';
import { users_permissionsUncheckedUpdateManyWithoutUsers_permissions_usersTousers_permissions_updated_byInput } from './users-permissions-unchecked-update-many-without-users-permissions-users-tousers-permissions-updated-by.input';

@InputType()
export class users_permissionsUpdateManyWithWhereWithoutUsers_usersTousers_permissions_updated_byInput {

    @Field(() => users_permissionsScalarWhereInput, {nullable:false})
    @Type(() => users_permissionsScalarWhereInput)
    where!: users_permissionsScalarWhereInput;

    @Field(() => users_permissionsUncheckedUpdateManyWithoutUsers_permissions_usersTousers_permissions_updated_byInput, {nullable:false})
    @Type(() => users_permissionsUncheckedUpdateManyWithoutUsers_permissions_usersTousers_permissions_updated_byInput)
    data!: users_permissionsUncheckedUpdateManyWithoutUsers_permissions_usersTousers_permissions_updated_byInput;
}
