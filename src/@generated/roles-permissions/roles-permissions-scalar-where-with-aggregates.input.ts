import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';

@InputType()
export class roles_permissionsScalarWhereWithAggregatesInput {

    @Field(() => [roles_permissionsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<roles_permissionsScalarWhereWithAggregatesInput>;

    @Field(() => [roles_permissionsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<roles_permissionsScalarWhereWithAggregatesInput>;

    @Field(() => [roles_permissionsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<roles_permissionsScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    role_id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    permission_id?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    created_by?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    updated_by?: StringNullableWithAggregatesFilter;
}
