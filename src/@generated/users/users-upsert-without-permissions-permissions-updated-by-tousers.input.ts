import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersUpdateWithoutPermissions_permissions_updated_byTousersInput } from './users-update-without-permissions-permissions-updated-by-tousers.input';
import { Type } from 'class-transformer';
import { usersCreateWithoutPermissions_permissions_updated_byTousersInput } from './users-create-without-permissions-permissions-updated-by-tousers.input';

@InputType()
export class usersUpsertWithoutPermissions_permissions_updated_byTousersInput {

    @Field(() => usersUpdateWithoutPermissions_permissions_updated_byTousersInput, {nullable:false})
    @Type(() => usersUpdateWithoutPermissions_permissions_updated_byTousersInput)
    update!: usersUpdateWithoutPermissions_permissions_updated_byTousersInput;

    @Field(() => usersCreateWithoutPermissions_permissions_updated_byTousersInput, {nullable:false})
    @Type(() => usersCreateWithoutPermissions_permissions_updated_byTousersInput)
    create!: usersCreateWithoutPermissions_permissions_updated_byTousersInput;
}
