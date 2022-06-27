import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { sale_type } from '../prisma/sale-type.enum';
import { type } from '../prisma/type.enum';
import { usersCreateNestedOneWithoutPost_prop_types_created_byTousersInput } from '../users/users-create-nested-one-without-post-prop-types-created-by-tousers.input';

@InputType()
export class post_prop_typesCreateWithoutUsers_post_prop_types_updated_byTousersInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => sale_type, {nullable:true})
    sale_type?: keyof typeof sale_type;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => type, {nullable:true})
    type?: keyof typeof type;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => usersCreateNestedOneWithoutPost_prop_types_created_byTousersInput, {nullable:true})
    users_post_prop_types_created_byTousers?: usersCreateNestedOneWithoutPost_prop_types_created_byTousersInput;
}
