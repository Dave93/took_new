import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { users_permissionsCreateInput } from '../users-permissions/users-permissions-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneusersPermissionsArgs {

    @Field(() => users_permissionsCreateInput, {nullable:false})
    @Type(() => users_permissionsCreateInput)
    data!: users_permissionsCreateInput;
}
