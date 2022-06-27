import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { users_rolesWhereInput } from '../users-roles/users-roles-where.input';
import { Type } from 'class-transformer';
import { users_rolesOrderByWithRelationInput } from '../users-roles/users-roles-order-by-with-relation.input';
import { users_rolesWhereUniqueInput } from '../users-roles/users-roles-where-unique.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class AggregateusersRolesArgs {

    @Field(() => users_rolesWhereInput, {nullable:true})
    @Type(() => users_rolesWhereInput)
    where?: users_rolesWhereInput;

    @Field(() => [users_rolesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<users_rolesOrderByWithRelationInput>;

    @Field(() => users_rolesWhereUniqueInput, {nullable:true})
    cursor?: users_rolesWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
