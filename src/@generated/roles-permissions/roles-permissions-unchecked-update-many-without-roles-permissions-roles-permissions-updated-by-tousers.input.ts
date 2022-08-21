import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class roles_permissionsUncheckedUpdateManyWithoutRoles_permissions_roles_permissions_updated_byTousersInput {

    @Field(() => String, {nullable:true})
    role_id?: string;

    @Field(() => String, {nullable:true})
    permission_id?: string;

    @Field(() => String, {nullable:true})
    created_by?: string;
}
