import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { Enumorganization_system_typeFilter } from '../prisma/enumorganization-system-type-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { Enumorganization_payment_typesFilter } from '../prisma/enumorganization-payment-types-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class organizationScalarWhereInput {

    @Field(() => [organizationScalarWhereInput], {nullable:true})
    AND?: Array<organizationScalarWhereInput>;

    @Field(() => [organizationScalarWhereInput], {nullable:true})
    OR?: Array<organizationScalarWhereInput>;

    @Field(() => [organizationScalarWhereInput], {nullable:true})
    NOT?: Array<organizationScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    external_id?: StringNullableFilter;

    @Field(() => BoolFilter, {nullable:true})
    active?: BoolFilter;

    @Field(() => Enumorganization_system_typeFilter, {nullable:true})
    system_type?: Enumorganization_system_typeFilter;

    @Field(() => StringFilter, {nullable:true})
    phone?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    iiko_login?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    webhook?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    group_id?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    apelsin_login?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    apelsin_password?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    sender_name?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    sender_number?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    max_distance?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    max_active_order_count?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    max_order_close_distance?: IntFilter;

    @Field(() => Enumorganization_payment_typesFilter, {nullable:true})
    payment_type?: Enumorganization_payment_typesFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    support_chat_url?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    icon_url?: StringNullableFilter;

    @Field(() => BoolFilter, {nullable:true})
    allow_yandex_delivery?: BoolFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updated_at?: DateTimeFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    created_by?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    updated_by?: StringNullableFilter;
}
