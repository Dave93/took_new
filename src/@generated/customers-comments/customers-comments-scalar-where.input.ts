import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class customers_commentsScalarWhereInput {

    @Field(() => [customers_commentsScalarWhereInput], {nullable:true})
    AND?: Array<customers_commentsScalarWhereInput>;

    @Field(() => [customers_commentsScalarWhereInput], {nullable:true})
    OR?: Array<customers_commentsScalarWhereInput>;

    @Field(() => [customers_commentsScalarWhereInput], {nullable:true})
    NOT?: Array<customers_commentsScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    customer_id?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    comment?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    voice_id?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    image_id?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    created_by?: StringNullableFilter;
}
