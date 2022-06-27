import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { UsersRelationFilter } from '../prisma/users-relation-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { Enumprice_typeFilter } from '../prisma/enumprice-type-filter.input';
import { EnumstatusFilter } from '../prisma/enumstatus-filter.input';
import { Enumsale_typeFilter } from '../prisma/enumsale-type-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { CityRelationFilter } from '../prisma/city-relation-filter.input';

@InputType()
export class postWhereInput {

    @Field(() => [postWhereInput], {nullable:true})
    AND?: Array<postWhereInput>;

    @Field(() => [postWhereInput], {nullable:true})
    OR?: Array<postWhereInput>;

    @Field(() => [postWhereInput], {nullable:true})
    NOT?: Array<postWhereInput>;

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

    @Field(() => UsersRelationFilter, {nullable:true})
    users_post_created_byTousers?: UsersRelationFilter;

    @Field(() => UsersRelationFilter, {nullable:true})
    users_post_updated_byTousers?: UsersRelationFilter;

    @Field(() => UsersRelationFilter, {nullable:true})
    users_post_user_idTousers?: UsersRelationFilter;

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

    @Field(() => CityRelationFilter, {nullable:true})
    city_city_idTocity?: CityRelationFilter;
}
