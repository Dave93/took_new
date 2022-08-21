import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { roles_permissionsUncheckedUpdateManyWithoutPermissionsNestedInput } from '../roles-permissions/roles-permissions-unchecked-update-many-without-permissions-nested.input';
import { users_permissionsUncheckedUpdateManyWithoutPermissionsNestedInput } from '../users-permissions/users-permissions-unchecked-update-many-without-permissions-nested.input';

@InputType()
export class permissionsUncheckedUpdateWithoutUsers_permissions_updated_byTousersInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    slug?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: StringFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    active?: BoolFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    created_at?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updated_at?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    created_by?: NullableStringFieldUpdateOperationsInput;

    @Field(() => roles_permissionsUncheckedUpdateManyWithoutPermissionsNestedInput, {nullable:true})
    roles_permissions?: roles_permissionsUncheckedUpdateManyWithoutPermissionsNestedInput;

    @Field(() => users_permissionsUncheckedUpdateManyWithoutPermissionsNestedInput, {nullable:true})
    users_permissions?: users_permissionsUncheckedUpdateManyWithoutPermissionsNestedInput;
}
