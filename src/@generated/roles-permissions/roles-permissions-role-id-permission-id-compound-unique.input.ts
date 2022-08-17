import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class roles_permissionsRole_idPermission_idCompoundUniqueInput {

    @Field(() => String, {nullable:false})
    role_id!: string;

    @Field(() => String, {nullable:false})
    permission_id!: string;
}
