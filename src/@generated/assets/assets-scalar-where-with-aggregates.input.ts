import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';

@InputType()
export class assetsScalarWhereWithAggregatesInput {

    @Field(() => [assetsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<assetsScalarWhereWithAggregatesInput>;

    @Field(() => [assetsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<assetsScalarWhereWithAggregatesInput>;

    @Field(() => [assetsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<assetsScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    model?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    file_name?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    model_id?: StringNullableWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    sub_folder?: StringWithAggregatesFilter;
}
