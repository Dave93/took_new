import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { roles_permissionsCreateInput } from '../roles-permissions/roles-permissions-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnerolesPermissionsArgs {

    @Field(() => roles_permissionsCreateInput, {nullable:false})
    @Type(() => roles_permissionsCreateInput)
    data!: roles_permissionsCreateInput;
}
