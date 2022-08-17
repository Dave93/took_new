import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { usersUpdateOneWithoutPermissions_permissions_created_byTousersInput } from '../users/users-update-one-without-permissions-permissions-created-by-tousers.input';
import { usersUpdateOneWithoutPermissions_permissions_updated_byTousersInput } from '../users/users-update-one-without-permissions-permissions-updated-by-tousers.input';
import { users_permissionsUpdateManyWithoutPermissionsInput } from '../users-permissions/users-permissions-update-many-without-permissions.input';

@InputType()
export class permissionsUpdateWithoutRoles_permissionsInput {

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

    @Field(() => usersUpdateOneWithoutPermissions_permissions_created_byTousersInput, {nullable:true})
    users_permissions_created_byTousers?: usersUpdateOneWithoutPermissions_permissions_created_byTousersInput;

    @Field(() => usersUpdateOneWithoutPermissions_permissions_updated_byTousersInput, {nullable:true})
    users_permissions_updated_byTousers?: usersUpdateOneWithoutPermissions_permissions_updated_byTousersInput;

    @Field(() => users_permissionsUpdateManyWithoutPermissionsInput, {nullable:true})
    users_permissions?: users_permissionsUpdateManyWithoutPermissionsInput;
}
