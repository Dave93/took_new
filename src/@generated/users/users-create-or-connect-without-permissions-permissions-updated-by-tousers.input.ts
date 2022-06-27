import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersWhereUniqueInput } from './users-where-unique.input';
import { Type } from 'class-transformer';
import { usersCreateWithoutPermissions_permissions_updated_byTousersInput } from './users-create-without-permissions-permissions-updated-by-tousers.input';

@InputType()
export class usersCreateOrConnectWithoutPermissions_permissions_updated_byTousersInput {

    @Field(() => usersWhereUniqueInput, {nullable:false})
    @Type(() => usersWhereUniqueInput)
    where!: usersWhereUniqueInput;

    @Field(() => usersCreateWithoutPermissions_permissions_updated_byTousersInput, {nullable:false})
    @Type(() => usersCreateWithoutPermissions_permissions_updated_byTousersInput)
    create!: usersCreateWithoutPermissions_permissions_updated_byTousersInput;
}
