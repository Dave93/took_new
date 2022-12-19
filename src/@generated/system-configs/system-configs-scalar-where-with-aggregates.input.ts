import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class system_configsScalarWhereWithAggregatesInput {

    @Field(() => [system_configsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<system_configsScalarWhereWithAggregatesInput>;

    @Field(() => [system_configsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<system_configsScalarWhereWithAggregatesInput>;

    @Field(() => [system_configsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<system_configsScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    value?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    created_at?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updated_at?: DateTimeWithAggregatesFilter;
}
