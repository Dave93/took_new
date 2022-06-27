import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class users_permissionsCreateManyUsers_usersTousers_permissions_user_idInput {

    @Field(() => Int, {nullable:false})
    permission_id!: number;

    @Field(() => String, {nullable:true})
    created_by?: string;

    @Field(() => String, {nullable:true})
    updated_by?: string;
}
