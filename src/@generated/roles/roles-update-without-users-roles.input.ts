import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { usersUpdateOneWithoutRoles_roles_created_byTousersInput } from '../users/users-update-one-without-roles-roles-created-by-tousers.input';
import { usersUpdateOneWithoutRoles_roles_updated_byTousersInput } from '../users/users-update-one-without-roles-roles-updated-by-tousers.input';
import { roles_permissionsUpdateManyWithoutRolesInput } from '../roles-permissions/roles-permissions-update-many-without-roles.input';

@InputType()
export class rolesUpdateWithoutUsers_rolesInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    active?: BoolFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    created_at?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updated_at?: DateTimeFieldUpdateOperationsInput;

    @Field(() => usersUpdateOneWithoutRoles_roles_created_byTousersInput, {nullable:true})
    users_roles_created_byTousers?: usersUpdateOneWithoutRoles_roles_created_byTousersInput;

    @Field(() => usersUpdateOneWithoutRoles_roles_updated_byTousersInput, {nullable:true})
    users_roles_updated_byTousers?: usersUpdateOneWithoutRoles_roles_updated_byTousersInput;

    @Field(() => roles_permissionsUpdateManyWithoutRolesInput, {nullable:true})
    roles_permissions?: roles_permissionsUpdateManyWithoutRolesInput;
}
