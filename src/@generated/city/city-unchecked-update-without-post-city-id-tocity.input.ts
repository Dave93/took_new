import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { cityUncheckedUpdateManyWithoutUsers_city_parent_idTousersNestedInput } from './city-unchecked-update-many-without-users-city-parent-id-tousers-nested.input';

@InputType()
export class cityUncheckedUpdateWithoutPost_city_idTocityInput {

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

    @Field(() => cityUncheckedUpdateManyWithoutUsers_city_parent_idTousersNestedInput, {nullable:true})
    city_parent_idTocity?: cityUncheckedUpdateManyWithoutUsers_city_parent_idTousersNestedInput;
}
