import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersCreateWithoutUsers_permissions_usersTousers_permissions_updated_byInput } from './users-create-without-users-permissions-users-tousers-permissions-updated-by.input';
import { Type } from 'class-transformer';
import { usersCreateOrConnectWithoutUsers_permissions_usersTousers_permissions_updated_byInput } from './users-create-or-connect-without-users-permissions-users-tousers-permissions-updated-by.input';
import { usersWhereUniqueInput } from './users-where-unique.input';

@InputType()
export class usersCreateNestedOneWithoutUsers_permissions_usersTousers_permissions_updated_byInput {

    @Field(() => usersCreateWithoutUsers_permissions_usersTousers_permissions_updated_byInput, {nullable:true})
    @Type(() => usersCreateWithoutUsers_permissions_usersTousers_permissions_updated_byInput)
    create?: usersCreateWithoutUsers_permissions_usersTousers_permissions_updated_byInput;

    @Field(() => usersCreateOrConnectWithoutUsers_permissions_usersTousers_permissions_updated_byInput, {nullable:true})
    @Type(() => usersCreateOrConnectWithoutUsers_permissions_usersTousers_permissions_updated_byInput)
    connectOrCreate?: usersCreateOrConnectWithoutUsers_permissions_usersTousers_permissions_updated_byInput;

    @Field(() => usersWhereUniqueInput, {nullable:true})
    @Type(() => usersWhereUniqueInput)
    connect?: usersWhereUniqueInput;
}
