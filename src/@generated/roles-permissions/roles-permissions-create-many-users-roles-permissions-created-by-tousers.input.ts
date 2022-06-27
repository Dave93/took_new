import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class roles_permissionsCreateManyUsers_roles_permissions_created_byTousersInput {

    @Field(() => Int, {nullable:false})
    role_id!: number;

    @Field(() => Int, {nullable:false})
    permission_id!: number;

    @Field(() => String, {nullable:true})
    updated_by?: string;
}
