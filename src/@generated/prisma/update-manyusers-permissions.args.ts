import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { users_permissionsUncheckedUpdateManyInput } from '../users-permissions/users-permissions-unchecked-update-many.input';
import { Type } from 'class-transformer';
import { users_permissionsWhereInput } from '../users-permissions/users-permissions-where.input';

@ArgsType()
export class UpdateManyusersPermissionsArgs {

    @Field(() => users_permissionsUncheckedUpdateManyInput, {nullable:false})
    @Type(() => users_permissionsUncheckedUpdateManyInput)
    data!: users_permissionsUncheckedUpdateManyInput;

    @Field(() => users_permissionsWhereInput, {nullable:true})
    @Type(() => users_permissionsWhereInput)
    where?: users_permissionsWhereInput;
}
