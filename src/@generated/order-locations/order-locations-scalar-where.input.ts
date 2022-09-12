import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class order_locationsScalarWhereInput {

    @Field(() => [order_locationsScalarWhereInput], {nullable:true})
    AND?: Array<order_locationsScalarWhereInput>;

    @Field(() => [order_locationsScalarWhereInput], {nullable:true})
    OR?: Array<order_locationsScalarWhereInput>;

    @Field(() => [order_locationsScalarWhereInput], {nullable:true})
    NOT?: Array<order_locationsScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    order_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    terminal_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    courier_id?: StringFilter;

    @Field(() => FloatFilter, {nullable:true})
    lat?: FloatFilter;

    @Field(() => FloatFilter, {nullable:true})
    lon?: FloatFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    created_by?: StringNullableFilter;
}
