import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { roles_permissionsWhereInput } from '../roles-permissions/roles-permissions-where.input';
import { Type } from 'class-transformer';
import { roles_permissionsOrderByWithRelationInput } from '../roles-permissions/roles-permissions-order-by-with-relation.input';
import { roles_permissionsWhereUniqueInput } from '../roles-permissions/roles-permissions-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Roles_permissionsScalarFieldEnum } from './roles-permissions-scalar-field.enum';

@ArgsType()
export class FindFirstrolesPermissionsArgs {

    @Field(() => roles_permissionsWhereInput, {nullable:true})
    @Type(() => roles_permissionsWhereInput)
    where?: roles_permissionsWhereInput;

    @Field(() => [roles_permissionsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<roles_permissionsOrderByWithRelationInput>;

    @Field(() => roles_permissionsWhereUniqueInput, {nullable:true})
    cursor?: roles_permissionsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [Roles_permissionsScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof Roles_permissionsScalarFieldEnum>;
}
