import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersCreateWithoutPermissions_permissions_created_byTousersInput } from './users-create-without-permissions-permissions-created-by-tousers.input';
import { Type } from 'class-transformer';
import { usersCreateOrConnectWithoutPermissions_permissions_created_byTousersInput } from './users-create-or-connect-without-permissions-permissions-created-by-tousers.input';
import { usersWhereUniqueInput } from './users-where-unique.input';

@InputType()
export class usersCreateNestedOneWithoutPermissions_permissions_created_byTousersInput {

    @Field(() => usersCreateWithoutPermissions_permissions_created_byTousersInput, {nullable:true})
    @Type(() => usersCreateWithoutPermissions_permissions_created_byTousersInput)
    create?: usersCreateWithoutPermissions_permissions_created_byTousersInput;

    @Field(() => usersCreateOrConnectWithoutPermissions_permissions_created_byTousersInput, {nullable:true})
    @Type(() => usersCreateOrConnectWithoutPermissions_permissions_created_byTousersInput)
    connectOrCreate?: usersCreateOrConnectWithoutPermissions_permissions_created_byTousersInput;

    @Field(() => usersWhereUniqueInput, {nullable:true})
    @Type(() => usersWhereUniqueInput)
    connect?: usersWhereUniqueInput;
}
