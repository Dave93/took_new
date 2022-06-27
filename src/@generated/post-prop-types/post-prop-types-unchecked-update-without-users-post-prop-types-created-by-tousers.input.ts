import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { Enumsale_typeFieldUpdateOperationsInput } from '../prisma/enumsale-type-field-update-operations.input';
import { EnumtypeFieldUpdateOperationsInput } from '../prisma/enumtype-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';

@InputType()
export class post_prop_typesUncheckedUpdateWithoutUsers_post_prop_types_created_byTousersInput {

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

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    updated_by?: NullableStringFieldUpdateOperationsInput;
}
