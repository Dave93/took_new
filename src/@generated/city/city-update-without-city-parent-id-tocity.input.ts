import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { usersUpdateOneWithoutCity_created_byTousersNestedInput } from '../users/users-update-one-without-city-created-by-tousers-nested.input';
import { usersUpdateOneWithoutCity_updated_byTousersNestedInput } from '../users/users-update-one-without-city-updated-by-tousers-nested.input';
import { cityUpdateOneWithoutCity_parent_idTocityNestedInput } from './city-update-one-without-city-parent-id-tocity-nested.input';
import { postUpdateManyWithoutCity_city_idTocityNestedInput } from '../post/post-update-many-without-city-city-id-tocity-nested.input';

@InputType()
export class cityUpdateWithoutCity_parent_idTocityInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    created_at?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updated_at?: DateTimeFieldUpdateOperationsInput;

    @Field(() => usersUpdateOneWithoutCity_created_byTousersNestedInput, {nullable:true})
    users_city_created_byTousers?: usersUpdateOneWithoutCity_created_byTousersNestedInput;

    @Field(() => usersUpdateOneWithoutCity_updated_byTousersNestedInput, {nullable:true})
    users_city_updated_byTousers?: usersUpdateOneWithoutCity_updated_byTousersNestedInput;

    @Field(() => cityUpdateOneWithoutCity_parent_idTocityNestedInput, {nullable:true})
    users_city_parent_idTousers?: cityUpdateOneWithoutCity_parent_idTocityNestedInput;

    @Field(() => postUpdateManyWithoutCity_city_idTocityNestedInput, {nullable:true})
    post_city_idTocity?: postUpdateManyWithoutCity_city_idTocityNestedInput;
}
