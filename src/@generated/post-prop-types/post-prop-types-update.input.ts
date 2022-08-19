import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { sale_type } from '../prisma/sale-type.enum';
import { type } from '../prisma/type.enum';
import { usersUpdateOneWithoutPost_prop_types_created_byTousersNestedInput } from '../users/users-update-one-without-post-prop-types-created-by-tousers-nested.input';
import { usersUpdateOneWithoutPost_prop_types_updated_byTousersNestedInput } from '../users/users-update-one-without-post-prop-types-updated-by-tousers-nested.input';

@InputType()
export class post_prop_typesUpdateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => sale_type, {nullable:true})
    sale_type?: keyof typeof sale_type;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => type, {nullable:true})
    type?: keyof typeof type;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => usersUpdateOneWithoutPost_prop_types_created_byTousersNestedInput, {nullable:true})
    users_post_prop_types_created_byTousers?: usersUpdateOneWithoutPost_prop_types_created_byTousersNestedInput;

    @Field(() => usersUpdateOneWithoutPost_prop_types_updated_byTousersNestedInput, {nullable:true})
    users_post_prop_types_updated_byTousers?: usersUpdateOneWithoutPost_prop_types_updated_byTousersNestedInput;
}
