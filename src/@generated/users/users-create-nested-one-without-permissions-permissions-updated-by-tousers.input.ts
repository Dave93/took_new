import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersCreateWithoutPermissions_permissions_updated_byTousersInput } from './users-create-without-permissions-permissions-updated-by-tousers.input';
import { Type } from 'class-transformer';
import { usersCreateOrConnectWithoutPermissions_permissions_updated_byTousersInput } from './users-create-or-connect-without-permissions-permissions-updated-by-tousers.input';
import { usersWhereUniqueInput } from './users-where-unique.input';

@InputType()
export class usersCreateNestedOneWithoutPermissions_permissions_updated_byTousersInput {

    @Field(() => usersCreateWithoutPermissions_permissions_updated_byTousersInput, {nullable:true})
    @Type(() => usersCreateWithoutPermissions_permissions_updated_byTousersInput)
    create?: usersCreateWithoutPermissions_permissions_updated_byTousersInput;

    @Field(() => usersCreateOrConnectWithoutPermissions_permissions_updated_byTousersInput, {nullable:true})
    @Type(() => usersCreateOrConnectWithoutPermissions_permissions_updated_byTousersInput)
    connectOrCreate?: usersCreateOrConnectWithoutPermissions_permissions_updated_byTousersInput;

    @Field(() => usersWhereUniqueInput, {nullable:true})
    @Type(() => usersWhereUniqueInput)
    connect?: usersWhereUniqueInput;
}
