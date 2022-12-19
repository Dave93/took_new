import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class brandsWhereInput {

    @Field(() => [brandsWhereInput], {nullable:true})
    AND?: Array<brandsWhereInput>;

    @Field(() => [brandsWhereInput], {nullable:true})
    OR?: Array<brandsWhereInput>;

    @Field(() => [brandsWhereInput], {nullable:true})
    NOT?: Array<brandsWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    api_url?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    logo_path?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updated_at?: DateTimeFilter;
}
