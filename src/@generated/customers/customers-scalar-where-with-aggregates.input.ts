import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class customersScalarWhereWithAggregatesInput {

    @Field(() => [customersScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<customersScalarWhereWithAggregatesInput>;

    @Field(() => [customersScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<customersScalarWhereWithAggregatesInput>;

    @Field(() => [customersScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<customersScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    phone?: StringWithAggregatesFilter;
}
