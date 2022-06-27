import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { Enumsale_typeFieldUpdateOperationsInput } from '../prisma/enumsale-type-field-update-operations.input';
import { EnumtypeFieldUpdateOperationsInput } from '../prisma/enumtype-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { usersUpdateOneWithoutPost_prop_types_updated_byTousersInput } from '../users/users-update-one-without-post-prop-types-updated-by-tousers.input';

@InputType()
export class post_prop_typesUpdateWithoutUsers_post_prop_types_created_byTousersInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => Enumsale_typeFieldUpdateOperationsInput, {nullable:true})
    sale_type?: Enumsale_typeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => EnumtypeFieldUpdateOperationsInput, {nullable:true})
    type?: EnumtypeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    created_at?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updated_at?: DateTimeFieldUpdateOperationsInput;

    @Field(() => usersUpdateOneWithoutPost_prop_types_updated_byTousersInput, {nullable:true})
    users_post_prop_types_updated_byTousers?: usersUpdateOneWithoutPost_prop_types_updated_byTousersInput;
}
