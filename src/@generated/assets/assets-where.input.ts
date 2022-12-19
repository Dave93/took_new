import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { Customers_commentsListRelationFilter } from '../prisma/customers-comments-list-relation-filter.input';
import { OrdersListRelationFilter } from '../prisma/orders-list-relation-filter.input';

@InputType()
export class assetsWhereInput {

    @Field(() => [assetsWhereInput], {nullable:true})
    AND?: Array<assetsWhereInput>;

    @Field(() => [assetsWhereInput], {nullable:true})
    OR?: Array<assetsWhereInput>;

    @Field(() => [assetsWhereInput], {nullable:true})
    NOT?: Array<assetsWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    model?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    file_name?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    model_id?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    sub_folder?: StringFilter;

    @Field(() => Customers_commentsListRelationFilter, {nullable:true})
    customers_comments_voice_idToassets?: Customers_commentsListRelationFilter;

    @Field(() => Customers_commentsListRelationFilter, {nullable:true})
    customers_comments_image_idToassets?: Customers_commentsListRelationFilter;

    @Field(() => OrdersListRelationFilter, {nullable:true})
    orders_voice_idToassets?: OrdersListRelationFilter;
}
