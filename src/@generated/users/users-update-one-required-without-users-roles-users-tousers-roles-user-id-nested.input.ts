import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersCreateWithoutUsers_roles_usersTousers_roles_user_idInput } from './users-create-without-users-roles-users-tousers-roles-user-id.input';
import { Type } from 'class-transformer';
import { usersCreateOrConnectWithoutUsers_roles_usersTousers_roles_user_idInput } from './users-create-or-connect-without-users-roles-users-tousers-roles-user-id.input';
import { usersUpsertWithoutUsers_roles_usersTousers_roles_user_idInput } from './users-upsert-without-users-roles-users-tousers-roles-user-id.input';
import { usersWhereUniqueInput } from './users-where-unique.input';
import { usersUpdateWithoutUsers_roles_usersTousers_roles_user_idInput } from './users-update-without-users-roles-users-tousers-roles-user-id.input';

@InputType()
export class usersUpdateOneRequiredWithoutUsers_roles_usersTousers_roles_user_idNestedInput {

    @Field(() => usersCreateWithoutUsers_roles_usersTousers_roles_user_idInput, {nullable:true})
    @Type(() => usersCreateWithoutUsers_roles_usersTousers_roles_user_idInput)
    create?: usersCreateWithoutUsers_roles_usersTousers_roles_user_idInput;

    @Field(() => usersCreateOrConnectWithoutUsers_roles_usersTousers_roles_user_idInput, {nullable:true})
    @Type(() => usersCreateOrConnectWithoutUsers_roles_usersTousers_roles_user_idInput)
    connectOrCreate?: usersCreateOrConnectWithoutUsers_roles_usersTousers_roles_user_idInput;

    @Field(() => usersUpsertWithoutUsers_roles_usersTousers_roles_user_idInput, {nullable:true})
    @Type(() => usersUpsertWithoutUsers_roles_usersTousers_roles_user_idInput)
    upsert?: usersUpsertWithoutUsers_roles_usersTousers_roles_user_idInput;

    @Field(() => usersWhereUniqueInput, {nullable:true})
    @Type(() => usersWhereUniqueInput)
    connect?: usersWhereUniqueInput;

    @Field(() => usersUpdateWithoutUsers_roles_usersTousers_roles_user_idInput, {nullable:true})
    @Type(() => usersUpdateWithoutUsers_roles_usersTousers_roles_user_idInput)
    update?: usersUpdateWithoutUsers_roles_usersTousers_roles_user_idInput;
}
