import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { migrationsWhereInput } from './migrations-where.input';
import { Type } from 'class-transformer';
import { migrationsOrderByWithRelationInput } from './migrations-order-by-with-relation.input';
import { migrationsWhereUniqueInput } from './migrations-where-unique.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class migrationsAggregateArgs {

    @Field(() => migrationsWhereInput, {nullable:true})
    @Type(() => migrationsWhereInput)
    where?: migrationsWhereInput;

    @Field(() => [migrationsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<migrationsOrderByWithRelationInput>;

    @Field(() => migrationsWhereUniqueInput, {nullable:true})
    cursor?: migrationsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
