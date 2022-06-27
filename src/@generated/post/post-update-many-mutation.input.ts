import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { Enumprice_typeFieldUpdateOperationsInput } from '../prisma/enumprice-type-field-update-operations.input';
import { EnumstatusFieldUpdateOperationsInput } from '../prisma/enumstatus-field-update-operations.input';
import { Enumsale_typeFieldUpdateOperationsInput } from '../prisma/enumsale-type-field-update-operations.input';
import { FloatFieldUpdateOperationsInput } from '../prisma/float-field-update-operations.input';

@InputType()
export class postUpdateManyMutationInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    created_at?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updated_at?: DateTimeFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    price?: IntFieldUpdateOperationsInput;

    @Field(() => Enumprice_typeFieldUpdateOperationsInput, {nullable:true})
    price_type?: Enumprice_typeFieldUpdateOperationsInput;

    @Field(() => EnumstatusFieldUpdateOperationsInput, {nullable:true})
    status?: EnumstatusFieldUpdateOperationsInput;

    @Field(() => Enumsale_typeFieldUpdateOperationsInput, {nullable:true})
    sale_type?: Enumsale_typeFieldUpdateOperationsInput;

    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    latitude?: FloatFieldUpdateOperationsInput;

    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    longitude?: FloatFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    address?: StringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    comments_count?: IntFieldUpdateOperationsInput;
}
