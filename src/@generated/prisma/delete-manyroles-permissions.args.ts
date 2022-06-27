import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { roles_permissionsWhereInput } from '../roles-permissions/roles-permissions-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyrolesPermissionsArgs {

    @Field(() => roles_permissionsWhereInput, {nullable:true})
    @Type(() => roles_permissionsWhereInput)
    where?: roles_permissionsWhereInput;
}
