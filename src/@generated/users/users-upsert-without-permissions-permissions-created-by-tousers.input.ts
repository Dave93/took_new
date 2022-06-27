import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersUpdateWithoutPermissions_permissions_created_byTousersInput } from './users-update-without-permissions-permissions-created-by-tousers.input';
import { Type } from 'class-transformer';
import { usersCreateWithoutPermissions_permissions_created_byTousersInput } from './users-create-without-permissions-permissions-created-by-tousers.input';

@InputType()
export class usersUpsertWithoutPermissions_permissions_created_byTousersInput {

    @Field(() => usersUpdateWithoutPermissions_permissions_created_byTousersInput, {nullable:false})
    @Type(() => usersUpdateWithoutPermissions_permissions_created_byTousersInput)
    update!: usersUpdateWithoutPermissions_permissions_created_byTousersInput;

    @Field(() => usersCreateWithoutPermissions_permissions_created_byTousersInput, {nullable:false})
    @Type(() => usersCreateWithoutPermissions_permissions_created_byTousersInput)
    create!: usersCreateWithoutPermissions_permissions_created_byTousersInput;
}
