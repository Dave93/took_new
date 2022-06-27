import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { postUncheckedCreateNestedManyWithoutCity_city_idTocityInput } from '../post/post-unchecked-create-nested-many-without-city-city-id-tocity.input';
import { cityUncheckedCreateNestedManyWithoutUsers_city_parent_idTousersInput } from './city-unchecked-create-nested-many-without-users-city-parent-id-tousers.input';

@InputType()
export class cityUncheckedCreateWithoutUsers_city_parent_idTousersInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => String, {nullable:true})
    created_by?: string;

    @Field(() => String, {nullable:true})
    updated_by?: string;

    @Field(() => postUncheckedCreateNestedManyWithoutCity_city_idTocityInput, {nullable:true})
    post_city_idTocity?: postUncheckedCreateNestedManyWithoutCity_city_idTocityInput;

    @Field(() => cityUncheckedCreateNestedManyWithoutUsers_city_parent_idTousersInput, {nullable:true})
    city_parent_idTocity?: cityUncheckedCreateNestedManyWithoutUsers_city_parent_idTousersInput;
}
