import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { usersWhereInput } from './users-where.input';
import { Type } from 'class-transformer';
import { usersOrderByWithRelationInput } from './users-order-by-with-relation.input';
import { usersWhereUniqueInput } from './users-where-unique.input';
import { Int } from '@nestjs/graphql';
import { UsersScalarFieldEnum } from '../prisma/users-scalar-field.enum';

@ArgsType()
export class FindFirstusersArgs {

    @Field(() => usersWhereInput, {nullable:true})
    @Type(() => usersWhereInput)
    where?: usersWhereInput;

    @Field(() => [usersOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<usersOrderByWithRelationInput>;

    @Field(() => usersWhereUniqueInput, {nullable:true})
    cursor?: usersWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [UsersScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof UsersScalarFieldEnum>;
}
