import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class users_work_schedulesScalarWhereWithAggregatesInput {

    @Field(() => [users_work_schedulesScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<users_work_schedulesScalarWhereWithAggregatesInput>;

    @Field(() => [users_work_schedulesScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<users_work_schedulesScalarWhereWithAggregatesInput>;

    @Field(() => [users_work_schedulesScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<users_work_schedulesScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    user_id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    work_schedule_id?: StringWithAggregatesFilter;
}
