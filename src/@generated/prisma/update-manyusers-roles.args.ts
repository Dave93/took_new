import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { users_rolesUncheckedUpdateManyInput } from '../users-roles/users-roles-unchecked-update-many.input';
import { Type } from 'class-transformer';
import { users_rolesWhereInput } from '../users-roles/users-roles-where.input';

@ArgsType()
export class UpdateManyusersRolesArgs {

    @Field(() => users_rolesUncheckedUpdateManyInput, {nullable:false})
    @Type(() => users_rolesUncheckedUpdateManyInput)
    data!: users_rolesUncheckedUpdateManyInput;

    @Field(() => users_rolesWhereInput, {nullable:true})
    @Type(() => users_rolesWhereInput)
    where?: users_rolesWhereInput;
}
