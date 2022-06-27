import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { users_permissionsWhereInput } from '../users-permissions/users-permissions-where.input';
import { Type } from 'class-transformer';
import { users_permissionsOrderByWithRelationInput } from '../users-permissions/users-permissions-order-by-with-relation.input';
import { users_permissionsWhereUniqueInput } from '../users-permissions/users-permissions-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Users_permissionsScalarFieldEnum } from './users-permissions-scalar-field.enum';

@ArgsType()
export class FindFirstusersPermissionsArgs {

    @Field(() => users_permissionsWhereInput, {nullable:true})
    @Type(() => users_permissionsWhereInput)
    where?: users_permissionsWhereInput;

    @Field(() => [users_permissionsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<users_permissionsOrderByWithRelationInput>;

    @Field(() => users_permissionsWhereUniqueInput, {nullable:true})
    cursor?: users_permissionsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [Users_permissionsScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof Users_permissionsScalarFieldEnum>;
}
