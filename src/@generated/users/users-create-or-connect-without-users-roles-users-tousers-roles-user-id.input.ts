import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersWhereUniqueInput } from './users-where-unique.input';
import { Type } from 'class-transformer';
import { usersCreateWithoutUsers_roles_usersTousers_roles_user_idInput } from './users-create-without-users-roles-users-tousers-roles-user-id.input';

@InputType()
export class usersCreateOrConnectWithoutUsers_roles_usersTousers_roles_user_idInput {

    @Field(() => usersWhereUniqueInput, {nullable:false})
    @Type(() => usersWhereUniqueInput)
    where!: usersWhereUniqueInput;

    @Field(() => usersCreateWithoutUsers_roles_usersTousers_roles_user_idInput, {nullable:false})
    @Type(() => usersCreateWithoutUsers_roles_usersTousers_roles_user_idInput)
    create!: usersCreateWithoutUsers_roles_usersTousers_roles_user_idInput;
}
