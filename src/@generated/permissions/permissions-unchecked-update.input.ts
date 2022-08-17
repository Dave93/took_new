import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { roles_permissionsUncheckedUpdateManyWithoutPermissionsInput } from '../roles-permissions/roles-permissions-unchecked-update-many-without-permissions.input';
import { users_permissionsUncheckedUpdateManyWithoutPermissionsInput } from '../users-permissions/users-permissions-unchecked-update-many-without-permissions.input';

@InputType()
export class permissionsUncheckedUpdateInput {

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

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    updated_by?: NullableStringFieldUpdateOperationsInput;

    @Field(() => roles_permissionsUncheckedUpdateManyWithoutPermissionsInput, {nullable:true})
    roles_permissions?: roles_permissionsUncheckedUpdateManyWithoutPermissionsInput;

    @Field(() => users_permissionsUncheckedUpdateManyWithoutPermissionsInput, {nullable:true})
    users_permissions?: users_permissionsUncheckedUpdateManyWithoutPermissionsInput;
}
