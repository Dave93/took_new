import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { terminalsWhereInput } from './terminals-where.input';
import { Type } from 'class-transformer';
import { terminalsOrderByWithRelationInput } from './terminals-order-by-with-relation.input';
import { terminalsWhereUniqueInput } from './terminals-where-unique.input';
import { Int } from '@nestjs/graphql';
import { TerminalsScalarFieldEnum } from '../prisma/terminals-scalar-field.enum';

@ArgsType()
export class FindManyterminalsArgs {

    @Field(() => terminalsWhereInput, {nullable:true})
    @Type(() => terminalsWhereInput)
    where?: terminalsWhereInput;

    @Field(() => [terminalsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<terminalsOrderByWithRelationInput>;

    @Field(() => terminalsWhereUniqueInput, {nullable:true})
    cursor?: terminalsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [TerminalsScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof TerminalsScalarFieldEnum>;
}
