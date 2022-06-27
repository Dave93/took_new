import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class users_rolesUser_idRole_idCompoundUniqueInput {

    @Field(() => String, {nullable:false})
    user_id!: string;

    @Field(() => Int, {nullable:false})
    role_id!: number;
}
