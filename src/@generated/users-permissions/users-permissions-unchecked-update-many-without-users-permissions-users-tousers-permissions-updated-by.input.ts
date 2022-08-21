import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class users_permissionsUncheckedUpdateManyWithoutUsers_permissions_usersTousers_permissions_updated_byInput {

    @Field(() => String, {nullable:true})
    user_id?: string;

    @Field(() => String, {nullable:true})
    permission_id?: string;

    @Field(() => String, {nullable:true})
    created_by?: string;
}
