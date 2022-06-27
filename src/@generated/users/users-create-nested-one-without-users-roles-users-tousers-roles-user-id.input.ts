import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersCreateWithoutUsers_roles_usersTousers_roles_user_idInput } from './users-create-without-users-roles-users-tousers-roles-user-id.input';
import { Type } from 'class-transformer';
import { usersCreateOrConnectWithoutUsers_roles_usersTousers_roles_user_idInput } from './users-create-or-connect-without-users-roles-users-tousers-roles-user-id.input';
import { usersWhereUniqueInput } from './users-where-unique.input';

@InputType()
export class usersCreateNestedOneWithoutUsers_roles_usersTousers_roles_user_idInput {

    @Field(() => usersCreateWithoutUsers_roles_usersTousers_roles_user_idInput, {nullable:true})
    @Type(() => usersCreateWithoutUsers_roles_usersTousers_roles_user_idInput)
    create?: usersCreateWithoutUsers_roles_usersTousers_roles_user_idInput;

    @Field(() => usersCreateOrConnectWithoutUsers_roles_usersTousers_roles_user_idInput, {nullable:true})
    @Type(() => usersCreateOrConnectWithoutUsers_roles_usersTousers_roles_user_idInput)
    connectOrCreate?: usersCreateOrConnectWithoutUsers_roles_usersTousers_roles_user_idInput;

    @Field(() => usersWhereUniqueInput, {nullable:true})
    @Type(() => usersWhereUniqueInput)
    connect?: usersWhereUniqueInput;
}
