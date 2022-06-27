import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { users_rolesUser_idRole_idCompoundUniqueInput } from './users-roles-user-id-role-id-compound-unique.input';

@InputType()
export class users_rolesWhereUniqueInput {

    @Field(() => users_rolesUser_idRole_idCompoundUniqueInput, {nullable:true})
    user_id_role_id?: users_rolesUser_idRole_idCompoundUniqueInput;
}
