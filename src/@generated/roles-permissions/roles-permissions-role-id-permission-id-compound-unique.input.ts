import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class roles_permissionsRole_idPermission_idCompoundUniqueInput {

    @Field(() => Int, {nullable:false})
    role_id!: number;

    @Field(() => Int, {nullable:false})
    permission_id!: number;
}
