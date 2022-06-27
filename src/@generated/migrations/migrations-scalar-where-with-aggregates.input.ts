import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { BigIntWithAggregatesFilter } from '../prisma/big-int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class migrationsScalarWhereWithAggregatesInput {

    @Field(() => [migrationsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<migrationsScalarWhereWithAggregatesInput>;

    @Field(() => [migrationsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<migrationsScalarWhereWithAggregatesInput>;

    @Field(() => [migrationsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<migrationsScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => BigIntWithAggregatesFilter, {nullable:true})
    timestamp?: BigIntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;
}
