import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { cityUncheckedCreateNestedManyWithoutUsers_city_parent_idTousersInput } from './city-unchecked-create-nested-many-without-users-city-parent-id-tousers.input';

@InputType()
export class cityUncheckedCreateWithoutPost_city_idTocityInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

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

    @Field(() => cityUncheckedCreateNestedManyWithoutUsers_city_parent_idTousersInput, {nullable:true})
    city_parent_idTocity?: cityUncheckedCreateNestedManyWithoutUsers_city_parent_idTousersInput;
}
