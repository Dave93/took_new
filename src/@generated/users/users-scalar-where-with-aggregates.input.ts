import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';
import { Enumuser_statusWithAggregatesFilter } from '../prisma/enumuser-status-with-aggregates-filter.input';
import { Enumdrive_typeNullableWithAggregatesFilter } from '../prisma/enumdrive-type-nullable-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';
import { FloatNullableWithAggregatesFilter } from '../prisma/float-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class usersScalarWhereWithAggregatesInput {

    @Field(() => [usersScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<usersScalarWhereWithAggregatesInput>;

    @Field(() => [usersScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<usersScalarWhereWithAggregatesInput>;

    @Field(() => [usersScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<usersScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    phone?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    first_name?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    last_name?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    password?: StringNullableWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    is_super_user?: BoolWithAggregatesFilter;

    @Field(() => Enumuser_statusWithAggregatesFilter, {nullable:true})
    status?: Enumuser_statusWithAggregatesFilter;

    @Field(() => Enumdrive_typeNullableWithAggregatesFilter, {nullable:true})
    drive_type?: Enumdrive_typeNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    card_name?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    card_number?: StringNullableWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    birth_date?: DateTimeNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    car_model?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    car_number?: StringNullableWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    is_online?: BoolWithAggregatesFilter;

    @Field(() => FloatNullableWithAggregatesFilter, {nullable:true})
    latitude?: FloatNullableWithAggregatesFilter;

    @Field(() => FloatNullableWithAggregatesFilter, {nullable:true})
    longitude?: FloatNullableWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    created_at?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updated_at?: DateTimeWithAggregatesFilter;
}
