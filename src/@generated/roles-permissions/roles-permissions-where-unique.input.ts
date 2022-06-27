import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { roles_permissionsRole_idPermission_idCompoundUniqueInput } from './roles-permissions-role-id-permission-id-compound-unique.input';

@InputType()
export class roles_permissionsWhereUniqueInput {

    @Field(() => roles_permissionsRole_idPermission_idCompoundUniqueInput, {nullable:true})
    role_id_permission_id?: roles_permissionsRole_idPermission_idCompoundUniqueInput;
}
