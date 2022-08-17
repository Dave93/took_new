import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { BigIntWithAggregatesFilter } from '../prisma/big-int-with-aggregates-filter.input';

@InputType()
export class migrationsScalarWhereWithAggregatesInput {

    @Field(() => [migrationsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<migrationsScalarWhereWithAggregatesInput>;

    @Field(() => [migrationsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<migrationsScalarWhereWithAggregatesInput>;

    @Field(() => [migrationsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<migrationsScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => BigIntWithAggregatesFilter, {nullable:true})
    timestamp?: BigIntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;
}
