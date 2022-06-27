import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersCreateWithoutUsers_roles_usersTousers_roles_created_byInput } from './users-create-without-users-roles-users-tousers-roles-created-by.input';
import { Type } from 'class-transformer';
import { usersCreateOrConnectWithoutUsers_roles_usersTousers_roles_created_byInput } from './users-create-or-connect-without-users-roles-users-tousers-roles-created-by.input';
import { usersUpsertWithoutUsers_roles_usersTousers_roles_created_byInput } from './users-upsert-without-users-roles-users-tousers-roles-created-by.input';
import { usersWhereUniqueInput } from './users-where-unique.input';
import { usersUpdateWithoutUsers_roles_usersTousers_roles_created_byInput } from './users-update-without-users-roles-users-tousers-roles-created-by.input';

@InputType()
export class usersUpdateOneWithoutUsers_roles_usersTousers_roles_created_byInput {

    @Field(() => usersCreateWithoutUsers_roles_usersTousers_roles_created_byInput, {nullable:true})
    @Type(() => usersCreateWithoutUsers_roles_usersTousers_roles_created_byInput)
    create?: usersCreateWithoutUsers_roles_usersTousers_roles_created_byInput;

    @Field(() => usersCreateOrConnectWithoutUsers_roles_usersTousers_roles_created_byInput, {nullable:true})
    @Type(() => usersCreateOrConnectWithoutUsers_roles_usersTousers_roles_created_byInput)
    connectOrCreate?: usersCreateOrConnectWithoutUsers_roles_usersTousers_roles_created_byInput;

    @Field(() => usersUpsertWithoutUsers_roles_usersTousers_roles_created_byInput, {nullable:true})
    @Type(() => usersUpsertWithoutUsers_roles_usersTousers_roles_created_byInput)
    upsert?: usersUpsertWithoutUsers_roles_usersTousers_roles_created_byInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => usersWhereUniqueInput, {nullable:true})
    @Type(() => usersWhereUniqueInput)
    connect?: usersWhereUniqueInput;

    @Field(() => usersUpdateWithoutUsers_roles_usersTousers_roles_created_byInput, {nullable:true})
    @Type(() => usersUpdateWithoutUsers_roles_usersTousers_roles_created_byInput)
    update?: usersUpdateWithoutUsers_roles_usersTousers_roles_created_byInput;
}
