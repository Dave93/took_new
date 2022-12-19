import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class manager_withdrawScalarWhereInput {

    @Field(() => [manager_withdrawScalarWhereInput], {nullable:true})
    AND?: Array<manager_withdrawScalarWhereInput>;

    @Field(() => [manager_withdrawScalarWhereInput], {nullable:true})
    OR?: Array<manager_withdrawScalarWhereInput>;

    @Field(() => [manager_withdrawScalarWhereInput], {nullable:true})
    NOT?: Array<manager_withdrawScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    manager_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    courier_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    terminal_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    organization_id?: StringFilter;

    @Field(() => FloatFilter, {nullable:true})
    amount?: FloatFilter;

    @Field(() => FloatFilter, {nullable:true})
    amount_before?: FloatFilter;

    @Field(() => FloatFilter, {nullable:true})
    amount_after?: FloatFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    payed_date?: DateTimeNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    created_by?: StringNullableFilter;
}
