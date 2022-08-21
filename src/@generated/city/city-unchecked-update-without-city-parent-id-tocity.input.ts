import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { postUncheckedUpdateManyWithoutCity_city_idTocityNestedInput } from '../post/post-unchecked-update-many-without-city-city-id-tocity-nested.input';

@InputType()
export class cityUncheckedUpdateWithoutCity_parent_idTocityInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    parent_id?: string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => String, {nullable:true})
    created_by?: string;

    @Field(() => String, {nullable:true})
    updated_by?: string;

    @Field(() => postUncheckedUpdateManyWithoutCity_city_idTocityNestedInput, {nullable:true})
    post_city_idTocity?: postUncheckedUpdateManyWithoutCity_city_idTocityNestedInput;
}
