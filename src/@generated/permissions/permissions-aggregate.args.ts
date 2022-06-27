import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { permissionsWhereInput } from './permissions-where.input';
import { Type } from 'class-transformer';
import { permissionsOrderByWithRelationInput } from './permissions-order-by-with-relation.input';
import { permissionsWhereUniqueInput } from './permissions-where-unique.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class permissionsAggregateArgs {

    @Field(() => permissionsWhereInput, {nullable:true})
    @Type(() => permissionsWhereInput)
    where?: permissionsWhereInput;

    @Field(() => [permissionsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<permissionsOrderByWithRelationInput>;

    @Field(() => permissionsWhereUniqueInput, {nullable:true})
    cursor?: permissionsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
