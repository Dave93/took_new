import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { users_permissionsWhereUniqueInput } from './users-permissions-where-unique.input';
import { Type } from 'class-transformer';
import { users_permissionsUpdateWithoutPermissionsInput } from './users-permissions-update-without-permissions.input';
import { users_permissionsCreateWithoutPermissionsInput } from './users-permissions-create-without-permissions.input';

@InputType()
export class users_permissionsUpsertWithWhereUniqueWithoutPermissionsInput {

    @Field(() => users_permissionsWhereUniqueInput, {nullable:false})
    @Type(() => users_permissionsWhereUniqueInput)
    where!: users_permissionsWhereUniqueInput;

    @Field(() => users_permissionsUpdateWithoutPermissionsInput, {nullable:false})
    @Type(() => users_permissionsUpdateWithoutPermissionsInput)
    update!: users_permissionsUpdateWithoutPermissionsInput;

    @Field(() => users_permissionsCreateWithoutPermissionsInput, {nullable:false})
    @Type(() => users_permissionsCreateWithoutPermissionsInput)
    create!: users_permissionsCreateWithoutPermissionsInput;
}
