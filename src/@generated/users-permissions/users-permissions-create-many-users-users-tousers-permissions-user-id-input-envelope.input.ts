import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { users_permissionsCreateManyUsers_usersTousers_permissions_user_idInput } from './users-permissions-create-many-users-users-tousers-permissions-user-id.input';
import { Type } from 'class-transformer';

@InputType()
export class users_permissionsCreateManyUsers_usersTousers_permissions_user_idInputEnvelope {

    @Field(() => [users_permissionsCreateManyUsers_usersTousers_permissions_user_idInput], {nullable:false})
    @Type(() => users_permissionsCreateManyUsers_usersTousers_permissions_user_idInput)
    data!: Array<users_permissionsCreateManyUsers_usersTousers_permissions_user_idInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
