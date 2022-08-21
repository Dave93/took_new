import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersCreateWithoutUsers_permissions_usersTousers_permissions_created_byInput } from './users-create-without-users-permissions-users-tousers-permissions-created-by.input';
import { Type } from 'class-transformer';
import { usersCreateOrConnectWithoutUsers_permissions_usersTousers_permissions_created_byInput } from './users-create-or-connect-without-users-permissions-users-tousers-permissions-created-by.input';
import { usersUpsertWithoutUsers_permissions_usersTousers_permissions_created_byInput } from './users-upsert-without-users-permissions-users-tousers-permissions-created-by.input';
import { usersWhereUniqueInput } from './users-where-unique.input';
import { usersUpdateWithoutUsers_permissions_usersTousers_permissions_created_byInput } from './users-update-without-users-permissions-users-tousers-permissions-created-by.input';

@InputType()
export class usersUpdateOneWithoutUsers_permissions_usersTousers_permissions_created_byNestedInput {

    @Field(() => usersCreateWithoutUsers_permissions_usersTousers_permissions_created_byInput, {nullable:true})
    @Type(() => usersCreateWithoutUsers_permissions_usersTousers_permissions_created_byInput)
    create?: usersCreateWithoutUsers_permissions_usersTousers_permissions_created_byInput;

    @Field(() => usersCreateOrConnectWithoutUsers_permissions_usersTousers_permissions_created_byInput, {nullable:true})
    @Type(() => usersCreateOrConnectWithoutUsers_permissions_usersTousers_permissions_created_byInput)
    connectOrCreate?: usersCreateOrConnectWithoutUsers_permissions_usersTousers_permissions_created_byInput;

    @Field(() => usersUpsertWithoutUsers_permissions_usersTousers_permissions_created_byInput, {nullable:true})
    @Type(() => usersUpsertWithoutUsers_permissions_usersTousers_permissions_created_byInput)
    upsert?: usersUpsertWithoutUsers_permissions_usersTousers_permissions_created_byInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => usersWhereUniqueInput, {nullable:true})
    @Type(() => usersWhereUniqueInput)
    connect?: usersWhereUniqueInput;

    @Field(() => usersUpdateWithoutUsers_permissions_usersTousers_permissions_created_byInput, {nullable:true})
    @Type(() => usersUpdateWithoutUsers_permissions_usersTousers_permissions_created_byInput)
    update?: usersUpdateWithoutUsers_permissions_usersTousers_permissions_created_byInput;
}
