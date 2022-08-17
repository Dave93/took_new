import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class roles_permissionsCreateManyInput {

    @Field(() => String, {nullable:false})
    role_id!: string;

    @Field(() => String, {nullable:false})
    permission_id!: string;

    @Field(() => String, {nullable:true})
    created_by?: string;

    @Field(() => String, {nullable:true})
    updated_by?: string;
}
