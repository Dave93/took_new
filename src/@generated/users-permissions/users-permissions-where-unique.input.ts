import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { users_permissionsUser_idPermission_idCompoundUniqueInput } from './users-permissions-user-id-permission-id-compound-unique.input';

@InputType()
export class users_permissionsWhereUniqueInput {

    @Field(() => users_permissionsUser_idPermission_idCompoundUniqueInput, {nullable:true})
    user_id_permission_id?: users_permissionsUser_idPermission_idCompoundUniqueInput;
}
