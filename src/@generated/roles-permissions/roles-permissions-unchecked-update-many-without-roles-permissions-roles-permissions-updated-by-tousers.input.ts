import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';

@InputType()
export class roles_permissionsUncheckedUpdateManyWithoutRoles_permissions_roles_permissions_updated_byTousersInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    role_id?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    permission_id?: IntFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    created_by?: NullableStringFieldUpdateOperationsInput;
}
