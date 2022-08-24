import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { organizationWhereInput } from './organization-where.input';
import { Type } from 'class-transformer';
import { organizationOrderByWithRelationInput } from './organization-order-by-with-relation.input';
import { organizationWhereUniqueInput } from './organization-where-unique.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class organizationAggregateArgs {

    @Field(() => organizationWhereInput, {nullable:true})
    @Type(() => organizationWhereInput)
    where?: organizationWhereInput;

    @Field(() => [organizationOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<organizationOrderByWithRelationInput>;

    @Field(() => organizationWhereUniqueInput, {nullable:true})
    cursor?: organizationWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
