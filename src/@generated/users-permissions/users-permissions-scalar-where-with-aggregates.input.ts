import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';

@InputType()
export class users_permissionsScalarWhereWithAggregatesInput {

    @Field(() => [users_permissionsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<users_permissionsScalarWhereWithAggregatesInput>;

    @Field(() => [users_permissionsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<users_permissionsScalarWhereWithAggregatesInput>;

    @Field(() => [users_permissionsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<users_permissionsScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    user_id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    permission_id?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    created_by?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    updated_by?: StringNullableWithAggregatesFilter;
}
