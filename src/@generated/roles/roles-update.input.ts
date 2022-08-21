import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { usersUpdateOneWithoutRoles_roles_created_byTousersNestedInput } from '../users/users-update-one-without-roles-roles-created-by-tousers-nested.input';
import { usersUpdateOneWithoutRoles_roles_updated_byTousersNestedInput } from '../users/users-update-one-without-roles-roles-updated-by-tousers-nested.input';
import { roles_permissionsUpdateManyWithoutRolesNestedInput } from '../roles-permissions/roles-permissions-update-many-without-roles-nested.input';
import { users_rolesUpdateManyWithoutRolesNestedInput } from '../users-roles/users-roles-update-many-without-roles-nested.input';

@InputType()
export class rolesUpdateInput {

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

    @Field(() => usersUpdateOneWithoutRoles_roles_created_byTousersNestedInput, {nullable:true})
    users_roles_created_byTousers?: usersUpdateOneWithoutRoles_roles_created_byTousersNestedInput;

    @Field(() => usersUpdateOneWithoutRoles_roles_updated_byTousersNestedInput, {nullable:true})
    users_roles_updated_byTousers?: usersUpdateOneWithoutRoles_roles_updated_byTousersNestedInput;

    @Field(() => roles_permissionsUpdateManyWithoutRolesNestedInput, {nullable:true})
    roles_permissions?: roles_permissionsUpdateManyWithoutRolesNestedInput;

    @Field(() => users_rolesUpdateManyWithoutRolesNestedInput, {nullable:true})
    users_roles?: users_rolesUpdateManyWithoutRolesNestedInput;
}
