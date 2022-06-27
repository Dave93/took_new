import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { postUncheckedUpdateManyWithoutCity_city_idTocityInput } from '../post/post-unchecked-update-many-without-city-city-id-tocity.input';
import { cityUncheckedUpdateManyWithoutUsers_city_parent_idTousersInput } from './city-unchecked-update-many-without-users-city-parent-id-tousers.input';

@InputType()
export class cityUncheckedUpdateWithoutUsers_city_parent_idTousersInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    created_at?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updated_at?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    created_by?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    updated_by?: NullableStringFieldUpdateOperationsInput;

    @Field(() => postUncheckedUpdateManyWithoutCity_city_idTocityInput, {nullable:true})
    post_city_idTocity?: postUncheckedUpdateManyWithoutCity_city_idTocityInput;

    @Field(() => cityUncheckedUpdateManyWithoutUsers_city_parent_idTousersInput, {nullable:true})
    city_parent_idTocity?: cityUncheckedUpdateManyWithoutUsers_city_parent_idTousersInput;
}
