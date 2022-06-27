import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersCreateWithoutUsers_roles_usersTousers_roles_created_byInput } from './users-create-without-users-roles-users-tousers-roles-created-by.input';
import { Type } from 'class-transformer';
import { usersCreateOrConnectWithoutUsers_roles_usersTousers_roles_created_byInput } from './users-create-or-connect-without-users-roles-users-tousers-roles-created-by.input';
import { usersWhereUniqueInput } from './users-where-unique.input';

@InputType()
export class usersCreateNestedOneWithoutUsers_roles_usersTousers_roles_created_byInput {

    @Field(() => usersCreateWithoutUsers_roles_usersTousers_roles_created_byInput, {nullable:true})
    @Type(() => usersCreateWithoutUsers_roles_usersTousers_roles_created_byInput)
    create?: usersCreateWithoutUsers_roles_usersTousers_roles_created_byInput;

    @Field(() => usersCreateOrConnectWithoutUsers_roles_usersTousers_roles_created_byInput, {nullable:true})
    @Type(() => usersCreateOrConnectWithoutUsers_roles_usersTousers_roles_created_byInput)
    connectOrCreate?: usersCreateOrConnectWithoutUsers_roles_usersTousers_roles_created_byInput;

    @Field(() => usersWhereUniqueInput, {nullable:true})
    @Type(() => usersWhereUniqueInput)
    connect?: usersWhereUniqueInput;
}
