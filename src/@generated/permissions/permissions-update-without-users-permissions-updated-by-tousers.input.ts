import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { usersUpdateOneWithoutPermissions_permissions_created_byTousersNestedInput } from '../users/users-update-one-without-permissions-permissions-created-by-tousers-nested.input';
import { roles_permissionsUpdateManyWithoutPermissionsNestedInput } from '../roles-permissions/roles-permissions-update-many-without-permissions-nested.input';
import { users_permissionsUpdateManyWithoutPermissionsNestedInput } from '../users-permissions/users-permissions-update-many-without-permissions-nested.input';

@InputType()
export class permissionsUpdateWithoutUsers_permissions_updated_byTousersInput {

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

    @Field(() => usersUpdateOneWithoutPermissions_permissions_created_byTousersNestedInput, {nullable:true})
    users_permissions_created_byTousers?: usersUpdateOneWithoutPermissions_permissions_created_byTousersNestedInput;

    @Field(() => roles_permissionsUpdateManyWithoutPermissionsNestedInput, {nullable:true})
    roles_permissions?: roles_permissionsUpdateManyWithoutPermissionsNestedInput;

    @Field(() => users_permissionsUpdateManyWithoutPermissionsNestedInput, {nullable:true})
    users_permissions?: users_permissionsUpdateManyWithoutPermissionsNestedInput;
}
