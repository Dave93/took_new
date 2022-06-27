import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { rolesWhereInput } from './roles-where.input';
import { Type } from 'class-transformer';
import { rolesOrderByWithRelationInput } from './roles-order-by-with-relation.input';
import { rolesWhereUniqueInput } from './roles-where-unique.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class rolesAggregateArgs {

    @Field(() => rolesWhereInput, {nullable:true})
    @Type(() => rolesWhereInput)
    where?: rolesWhereInput;

    @Field(() => [rolesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<rolesOrderByWithRelationInput>;

    @Field(() => rolesWhereUniqueInput, {nullable:true})
    cursor?: rolesWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
