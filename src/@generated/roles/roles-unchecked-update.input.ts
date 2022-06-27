import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { roles_permissionsUncheckedUpdateManyWithoutRolesInput } from '../roles-permissions/roles-permissions-unchecked-update-many-without-roles.input';
import { users_rolesUncheckedUpdateManyWithoutRolesInput } from '../users-roles/users-roles-unchecked-update-many-without-roles.input';

@InputType()
export class rolesUncheckedUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    active?: BoolFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    created_at?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updated_at?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    created_by?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    updated_by?: NullableStringFieldUpdateOperationsInput;

    @Field(() => roles_permissionsUncheckedUpdateManyWithoutRolesInput, {nullable:true})
    roles_permissions?: roles_permissionsUncheckedUpdateManyWithoutRolesInput;

    @Field(() => users_rolesUncheckedUpdateManyWithoutRolesInput, {nullable:true})
    users_roles?: users_rolesUncheckedUpdateManyWithoutRolesInput;
}
