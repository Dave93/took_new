import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersUpdateWithoutUsers_permissions_usersTousers_permissions_created_byInput } from './users-update-without-users-permissions-users-tousers-permissions-created-by.input';
import { Type } from 'class-transformer';
import { usersCreateWithoutUsers_permissions_usersTousers_permissions_created_byInput } from './users-create-without-users-permissions-users-tousers-permissions-created-by.input';

@InputType()
export class usersUpsertWithoutUsers_permissions_usersTousers_permissions_created_byInput {

    @Field(() => usersUpdateWithoutUsers_permissions_usersTousers_permissions_created_byInput, {nullable:false})
    @Type(() => usersUpdateWithoutUsers_permissions_usersTousers_permissions_created_byInput)
    update!: usersUpdateWithoutUsers_permissions_usersTousers_permissions_created_byInput;

    @Field(() => usersCreateWithoutUsers_permissions_usersTousers_permissions_created_byInput, {nullable:false})
    @Type(() => usersCreateWithoutUsers_permissions_usersTousers_permissions_created_byInput)
    create!: usersCreateWithoutUsers_permissions_usersTousers_permissions_created_byInput;
}
