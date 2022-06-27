import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { users_permissionsScalarWhereInput } from './users-permissions-scalar-where.input';
import { Type } from 'class-transformer';
import { users_permissionsUncheckedUpdateManyWithoutUsers_permissionsInput } from './users-permissions-unchecked-update-many-without-users-permissions.input';

@InputType()
export class users_permissionsUpdateManyWithWhereWithoutPermissionsInput {

    @Field(() => users_permissionsScalarWhereInput, {nullable:false})
    @Type(() => users_permissionsScalarWhereInput)
    where!: users_permissionsScalarWhereInput;

    @Field(() => users_permissionsUncheckedUpdateManyWithoutUsers_permissionsInput, {nullable:false})
    @Type(() => users_permissionsUncheckedUpdateManyWithoutUsers_permissionsInput)
    data!: users_permissionsUncheckedUpdateManyWithoutUsers_permissionsInput;
}
