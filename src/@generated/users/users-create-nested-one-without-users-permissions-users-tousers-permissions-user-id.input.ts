import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersCreateWithoutUsers_permissions_usersTousers_permissions_user_idInput } from './users-create-without-users-permissions-users-tousers-permissions-user-id.input';
import { Type } from 'class-transformer';
import { usersCreateOrConnectWithoutUsers_permissions_usersTousers_permissions_user_idInput } from './users-create-or-connect-without-users-permissions-users-tousers-permissions-user-id.input';
import { usersWhereUniqueInput } from './users-where-unique.input';

@InputType()
export class usersCreateNestedOneWithoutUsers_permissions_usersTousers_permissions_user_idInput {

    @Field(() => usersCreateWithoutUsers_permissions_usersTousers_permissions_user_idInput, {nullable:true})
    @Type(() => usersCreateWithoutUsers_permissions_usersTousers_permissions_user_idInput)
    create?: usersCreateWithoutUsers_permissions_usersTousers_permissions_user_idInput;

    @Field(() => usersCreateOrConnectWithoutUsers_permissions_usersTousers_permissions_user_idInput, {nullable:true})
    @Type(() => usersCreateOrConnectWithoutUsers_permissions_usersTousers_permissions_user_idInput)
    connectOrCreate?: usersCreateOrConnectWithoutUsers_permissions_usersTousers_permissions_user_idInput;

    @Field(() => usersWhereUniqueInput, {nullable:true})
    @Type(() => usersWhereUniqueInput)
    connect?: usersWhereUniqueInput;
}
