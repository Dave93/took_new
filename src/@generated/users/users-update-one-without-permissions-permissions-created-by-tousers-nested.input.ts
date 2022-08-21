import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersCreateWithoutPermissions_permissions_created_byTousersInput } from './users-create-without-permissions-permissions-created-by-tousers.input';
import { Type } from 'class-transformer';
import { usersCreateOrConnectWithoutPermissions_permissions_created_byTousersInput } from './users-create-or-connect-without-permissions-permissions-created-by-tousers.input';
import { usersUpsertWithoutPermissions_permissions_created_byTousersInput } from './users-upsert-without-permissions-permissions-created-by-tousers.input';
import { usersWhereUniqueInput } from './users-where-unique.input';
import { usersUpdateWithoutPermissions_permissions_created_byTousersInput } from './users-update-without-permissions-permissions-created-by-tousers.input';

@InputType()
export class usersUpdateOneWithoutPermissions_permissions_created_byTousersNestedInput {

    @Field(() => usersCreateWithoutPermissions_permissions_created_byTousersInput, {nullable:true})
    @Type(() => usersCreateWithoutPermissions_permissions_created_byTousersInput)
    create?: usersCreateWithoutPermissions_permissions_created_byTousersInput;

    @Field(() => usersCreateOrConnectWithoutPermissions_permissions_created_byTousersInput, {nullable:true})
    @Type(() => usersCreateOrConnectWithoutPermissions_permissions_created_byTousersInput)
    connectOrCreate?: usersCreateOrConnectWithoutPermissions_permissions_created_byTousersInput;

    @Field(() => usersUpsertWithoutPermissions_permissions_created_byTousersInput, {nullable:true})
    @Type(() => usersUpsertWithoutPermissions_permissions_created_byTousersInput)
    upsert?: usersUpsertWithoutPermissions_permissions_created_byTousersInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => usersWhereUniqueInput, {nullable:true})
    @Type(() => usersWhereUniqueInput)
    connect?: usersWhereUniqueInput;

    @Field(() => usersUpdateWithoutPermissions_permissions_created_byTousersInput, {nullable:true})
    @Type(() => usersUpdateWithoutPermissions_permissions_created_byTousersInput)
    update?: usersUpdateWithoutPermissions_permissions_created_byTousersInput;
}
