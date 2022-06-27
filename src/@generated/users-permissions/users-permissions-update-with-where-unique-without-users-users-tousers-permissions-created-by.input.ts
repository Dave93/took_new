import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { users_permissionsWhereUniqueInput } from './users-permissions-where-unique.input';
import { Type } from 'class-transformer';
import { users_permissionsUpdateWithoutUsers_usersTousers_permissions_created_byInput } from './users-permissions-update-without-users-users-tousers-permissions-created-by.input';

@InputType()
export class users_permissionsUpdateWithWhereUniqueWithoutUsers_usersTousers_permissions_created_byInput {

    @Field(() => users_permissionsWhereUniqueInput, {nullable:false})
    @Type(() => users_permissionsWhereUniqueInput)
    where!: users_permissionsWhereUniqueInput;

    @Field(() => users_permissionsUpdateWithoutUsers_usersTousers_permissions_created_byInput, {nullable:false})
    @Type(() => users_permissionsUpdateWithoutUsers_usersTousers_permissions_created_byInput)
    data!: users_permissionsUpdateWithoutUsers_usersTousers_permissions_created_byInput;
}
