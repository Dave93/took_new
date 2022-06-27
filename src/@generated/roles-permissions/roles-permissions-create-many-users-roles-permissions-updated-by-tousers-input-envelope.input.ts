import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { roles_permissionsCreateManyUsers_roles_permissions_updated_byTousersInput } from './roles-permissions-create-many-users-roles-permissions-updated-by-tousers.input';
import { Type } from 'class-transformer';

@InputType()
export class roles_permissionsCreateManyUsers_roles_permissions_updated_byTousersInputEnvelope {

    @Field(() => [roles_permissionsCreateManyUsers_roles_permissions_updated_byTousersInput], {nullable:false})
    @Type(() => roles_permissionsCreateManyUsers_roles_permissions_updated_byTousersInput)
    data!: Array<roles_permissionsCreateManyUsers_roles_permissions_updated_byTousersInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
