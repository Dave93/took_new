import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class order_votesScalarWhereInput {

    @Field(() => [order_votesScalarWhereInput], {nullable:true})
    AND?: Array<order_votesScalarWhereInput>;

    @Field(() => [order_votesScalarWhereInput], {nullable:true})
    OR?: Array<order_votesScalarWhereInput>;

    @Field(() => [order_votesScalarWhereInput], {nullable:true})
    NOT?: Array<order_votesScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    order_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    terminal_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    courier_id?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    is_voting?: BoolFilter;

    @Field(() => BoolFilter, {nullable:true})
    is_chosen?: BoolFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    created_by?: StringNullableFilter;
}
