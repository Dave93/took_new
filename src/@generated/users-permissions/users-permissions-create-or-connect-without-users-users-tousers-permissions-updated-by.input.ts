import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { users_permissionsWhereUniqueInput } from './users-permissions-where-unique.input';
import { Type } from 'class-transformer';
import { users_permissionsCreateWithoutUsers_usersTousers_permissions_updated_byInput } from './users-permissions-create-without-users-users-tousers-permissions-updated-by.input';

@InputType()
export class users_permissionsCreateOrConnectWithoutUsers_usersTousers_permissions_updated_byInput {

    @Field(() => users_permissionsWhereUniqueInput, {nullable:false})
    @Type(() => users_permissionsWhereUniqueInput)
    where!: users_permissionsWhereUniqueInput;

    @Field(() => users_permissionsCreateWithoutUsers_usersTousers_permissions_updated_byInput, {nullable:false})
    @Type(() => users_permissionsCreateWithoutUsers_usersTousers_permissions_updated_byInput)
    create!: users_permissionsCreateWithoutUsers_usersTousers_permissions_updated_byInput;
}
