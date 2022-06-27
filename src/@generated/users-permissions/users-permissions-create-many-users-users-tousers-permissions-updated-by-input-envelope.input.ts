import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { users_permissionsCreateManyUsers_usersTousers_permissions_updated_byInput } from './users-permissions-create-many-users-users-tousers-permissions-updated-by.input';
import { Type } from 'class-transformer';

@InputType()
export class users_permissionsCreateManyUsers_usersTousers_permissions_updated_byInputEnvelope {

    @Field(() => [users_permissionsCreateManyUsers_usersTousers_permissions_updated_byInput], {nullable:false})
    @Type(() => users_permissionsCreateManyUsers_usersTousers_permissions_updated_byInput)
    data!: Array<users_permissionsCreateManyUsers_usersTousers_permissions_updated_byInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
