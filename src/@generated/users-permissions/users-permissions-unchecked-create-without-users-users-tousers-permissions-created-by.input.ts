import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class users_permissionsUncheckedCreateWithoutUsers_usersTousers_permissions_created_byInput {

    @Field(() => String, {nullable:false})
    user_id!: string;

    @Field(() => Int, {nullable:false})
    permission_id!: number;

    @Field(() => String, {nullable:true})
    updated_by?: string;
}
