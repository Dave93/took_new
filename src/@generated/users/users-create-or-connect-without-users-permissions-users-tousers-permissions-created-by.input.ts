import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersWhereUniqueInput } from './users-where-unique.input';
import { Type } from 'class-transformer';
import { usersCreateWithoutUsers_permissions_usersTousers_permissions_created_byInput } from './users-create-without-users-permissions-users-tousers-permissions-created-by.input';

@InputType()
export class usersCreateOrConnectWithoutUsers_permissions_usersTousers_permissions_created_byInput {

    @Field(() => usersWhereUniqueInput, {nullable:false})
    @Type(() => usersWhereUniqueInput)
    where!: usersWhereUniqueInput;

    @Field(() => usersCreateWithoutUsers_permissions_usersTousers_permissions_created_byInput, {nullable:false})
    @Type(() => usersCreateWithoutUsers_permissions_usersTousers_permissions_created_byInput)
    create!: usersCreateWithoutUsers_permissions_usersTousers_permissions_created_byInput;
}
