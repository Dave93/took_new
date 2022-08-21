import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { roles_permissionsUncheckedUpdateManyWithoutRolesNestedInput } from '../roles-permissions/roles-permissions-unchecked-update-many-without-roles-nested.input';
import { users_rolesUncheckedUpdateManyWithoutRolesNestedInput } from '../users-roles/users-roles-unchecked-update-many-without-roles-nested.input';

@InputType()
export class rolesUncheckedUpdateWithoutUsers_roles_created_byTousersInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    active?: BoolFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    created_at?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updated_at?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    updated_by?: NullableStringFieldUpdateOperationsInput;

    @Field(() => roles_permissionsUncheckedUpdateManyWithoutRolesNestedInput, {nullable:true})
    roles_permissions?: roles_permissionsUncheckedUpdateManyWithoutRolesNestedInput;

    @Field(() => users_rolesUncheckedUpdateManyWithoutRolesNestedInput, {nullable:true})
    users_roles?: users_rolesUncheckedUpdateManyWithoutRolesNestedInput;
}
