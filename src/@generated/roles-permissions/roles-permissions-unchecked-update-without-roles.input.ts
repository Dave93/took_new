import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class roles_permissionsUncheckedUpdateWithoutRolesInput {

    @Field(() => String, {nullable:true})
    permission_id?: string;

    @Field(() => String, {nullable:true})
    created_by?: string;

    @Field(() => String, {nullable:true})
    updated_by?: string;
}
