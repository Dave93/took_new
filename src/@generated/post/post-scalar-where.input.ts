import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { Enumprice_typeFilter } from '../prisma/enumprice-type-filter.input';
import { EnumstatusFilter } from '../prisma/enumstatus-filter.input';
import { Enumsale_typeFilter } from '../prisma/enumsale-type-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';

@InputType()
export class postScalarWhereInput {

    @Field(() => [postScalarWhereInput], {nullable:true})
    AND?: Array<postScalarWhereInput>;

    @Field(() => [postScalarWhereInput], {nullable:true})
    OR?: Array<postScalarWhereInput>;

    @Field(() => [postScalarWhereInput], {nullable:true})
    NOT?: Array<postScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    user_id?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updated_at?: DateTimeFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    created_by?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    updated_by?: StringNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    price?: IntFilter;

    @Field(() => Enumprice_typeFilter, {nullable:true})
    price_type?: Enumprice_typeFilter;

    @Field(() => EnumstatusFilter, {nullable:true})
    status?: EnumstatusFilter;

    @Field(() => Enumsale_typeFilter, {nullable:true})
    sale_type?: Enumsale_typeFilter;

    @Field(() => FloatFilter, {nullable:true})
    latitude?: FloatFilter;

    @Field(() => FloatFilter, {nullable:true})
    longitude?: FloatFilter;

    @Field(() => StringFilter, {nullable:true})
    address?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    comments_count?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    city_id?: StringFilter;
}
