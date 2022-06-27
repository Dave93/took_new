import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';

@InputType()
export class users_rolesScalarWhereWithAggregatesInput {

    @Field(() => [users_rolesScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<users_rolesScalarWhereWithAggregatesInput>;

    @Field(() => [users_rolesScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<users_rolesScalarWhereWithAggregatesInput>;

    @Field(() => [users_rolesScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<users_rolesScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    user_id?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    role_id?: IntWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    created_by?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    updated_by?: StringNullableWithAggregatesFilter;
}
