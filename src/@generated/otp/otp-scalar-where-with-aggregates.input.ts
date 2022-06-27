import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';

@InputType()
export class otpScalarWhereWithAggregatesInput {

    @Field(() => [otpScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<otpScalarWhereWithAggregatesInput>;

    @Field(() => [otpScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<otpScalarWhereWithAggregatesInput>;

    @Field(() => [otpScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<otpScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    user_id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    otp?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    expiry_date?: DateTimeWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    verified?: BoolWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    created_at?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updated_at?: DateTimeWithAggregatesFilter;
}
