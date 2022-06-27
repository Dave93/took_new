import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { roles_permissionsCreateManyUsers_roles_permissions_created_byTousersInput } from './roles-permissions-create-many-users-roles-permissions-created-by-tousers.input';
import { Type } from 'class-transformer';

@InputType()
export class roles_permissionsCreateManyUsers_roles_permissions_created_byTousersInputEnvelope {

    @Field(() => [roles_permissionsCreateManyUsers_roles_permissions_created_byTousersInput], {nullable:false})
    @Type(() => roles_permissionsCreateManyUsers_roles_permissions_created_byTousersInput)
    data!: Array<roles_permissionsCreateManyUsers_roles_permissions_created_byTousersInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
