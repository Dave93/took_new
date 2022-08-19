import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersUpdateOneWithoutCity_created_byTousersNestedInput } from '../users/users-update-one-without-city-created-by-tousers-nested.input';
import { cityUpdateOneWithoutCity_parent_idTocityNestedInput } from './city-update-one-without-city-parent-id-tocity-nested.input';
import { postUpdateManyWithoutCity_city_idTocityNestedInput } from '../post/post-update-many-without-city-city-id-tocity-nested.input';
import { cityUpdateManyWithoutUsers_city_parent_idTousersNestedInput } from './city-update-many-without-users-city-parent-id-tousers-nested.input';

@InputType()
export class cityUpdateWithoutUsers_city_updated_byTousersInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => usersUpdateOneWithoutCity_created_byTousersNestedInput, {nullable:true})
    users_city_created_byTousers?: usersUpdateOneWithoutCity_created_byTousersNestedInput;

    @Field(() => cityUpdateOneWithoutCity_parent_idTocityNestedInput, {nullable:true})
    users_city_parent_idTousers?: cityUpdateOneWithoutCity_parent_idTocityNestedInput;

    @Field(() => postUpdateManyWithoutCity_city_idTocityNestedInput, {nullable:true})
    post_city_idTocity?: postUpdateManyWithoutCity_city_idTocityNestedInput;

    @Field(() => cityUpdateManyWithoutUsers_city_parent_idTousersNestedInput, {nullable:true})
    city_parent_idTocity?: cityUpdateManyWithoutUsers_city_parent_idTousersNestedInput;
}
