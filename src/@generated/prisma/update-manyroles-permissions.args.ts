import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { roles_permissionsUncheckedUpdateManyInput } from '../roles-permissions/roles-permissions-unchecked-update-many.input';
import { Type } from 'class-transformer';
import { roles_permissionsWhereInput } from '../roles-permissions/roles-permissions-where.input';

@ArgsType()
export class UpdateManyrolesPermissionsArgs {

    @Field(() => roles_permissionsUncheckedUpdateManyInput, {nullable:false})
    @Type(() => roles_permissionsUncheckedUpdateManyInput)
    data!: roles_permissionsUncheckedUpdateManyInput;

    @Field(() => roles_permissionsWhereInput, {nullable:true})
    @Type(() => roles_permissionsWhereInput)
    where?: roles_permissionsWhereInput;
}
