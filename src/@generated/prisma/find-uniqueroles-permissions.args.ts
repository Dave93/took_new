import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { roles_permissionsWhereUniqueInput } from '../roles-permissions/roles-permissions-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquerolesPermissionsArgs {

    @Field(() => roles_permissionsWhereUniqueInput, {nullable:false})
    @Type(() => roles_permissionsWhereUniqueInput)
    where!: roles_permissionsWhereUniqueInput;
}
