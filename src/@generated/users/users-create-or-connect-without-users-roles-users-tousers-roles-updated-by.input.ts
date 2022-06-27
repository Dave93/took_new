import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersWhereUniqueInput } from './users-where-unique.input';
import { Type } from 'class-transformer';
import { usersCreateWithoutUsers_roles_usersTousers_roles_updated_byInput } from './users-create-without-users-roles-users-tousers-roles-updated-by.input';

@InputType()
export class usersCreateOrConnectWithoutUsers_roles_usersTousers_roles_updated_byInput {

    @Field(() => usersWhereUniqueInput, {nullable:false})
    @Type(() => usersWhereUniqueInput)
    where!: usersWhereUniqueInput;

    @Field(() => usersCreateWithoutUsers_roles_usersTousers_roles_updated_byInput, {nullable:false})
    @Type(() => usersCreateWithoutUsers_roles_usersTousers_roles_updated_byInput)
    create!: usersCreateWithoutUsers_roles_usersTousers_roles_updated_byInput;
}
