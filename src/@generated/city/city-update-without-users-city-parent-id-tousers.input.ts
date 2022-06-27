import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { usersUpdateOneWithoutCity_created_byTousersInput } from '../users/users-update-one-without-city-created-by-tousers.input';
import { usersUpdateOneWithoutCity_updated_byTousersInput } from '../users/users-update-one-without-city-updated-by-tousers.input';
import { postUpdateManyWithoutCity_city_idTocityInput } from '../post/post-update-many-without-city-city-id-tocity.input';
import { cityUpdateManyWithoutUsers_city_parent_idTousersInput } from './city-update-many-without-users-city-parent-id-tousers.input';

@InputType()
export class cityUpdateWithoutUsers_city_parent_idTousersInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    created_at?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updated_at?: DateTimeFieldUpdateOperationsInput;

    @Field(() => usersUpdateOneWithoutCity_created_byTousersInput, {nullable:true})
    users_city_created_byTousers?: usersUpdateOneWithoutCity_created_byTousersInput;

    @Field(() => usersUpdateOneWithoutCity_updated_byTousersInput, {nullable:true})
    users_city_updated_byTousers?: usersUpdateOneWithoutCity_updated_byTousersInput;

    @Field(() => postUpdateManyWithoutCity_city_idTocityInput, {nullable:true})
    post_city_idTocity?: postUpdateManyWithoutCity_city_idTocityInput;

    @Field(() => cityUpdateManyWithoutUsers_city_parent_idTousersInput, {nullable:true})
    city_parent_idTocity?: cityUpdateManyWithoutUsers_city_parent_idTousersInput;
}
