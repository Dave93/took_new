import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class users_terminalsScalarWhereWithAggregatesInput {

    @Field(() => [users_terminalsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<users_terminalsScalarWhereWithAggregatesInput>;

    @Field(() => [users_terminalsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<users_terminalsScalarWhereWithAggregatesInput>;

    @Field(() => [users_terminalsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<users_terminalsScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    user_id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    terminal_id?: StringWithAggregatesFilter;
}
