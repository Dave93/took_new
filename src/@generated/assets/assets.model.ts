import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { customers_comments } from '../customers-comments/customers-comments.model';
import { orders } from '../orders/orders.model';
import { AssetsCount } from '../prisma/assets-count.output';

@ObjectType()
export class assets {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    model!: string;

    @Field(() => String, {nullable:false})
    file_name!: string;

    @Field(() => String, {nullable:true})
    model_id!: string | null;

    @Field(() => String, {nullable:false})
    sub_folder!: string;

    @Field(() => [customers_comments], {nullable:true})
    customers_comments_voice_idToassets?: Array<customers_comments>;

    @Field(() => [customers_comments], {nullable:true})
    customers_comments_image_idToassets?: Array<customers_comments>;

    @Field(() => [orders], {nullable:true})
    orders_voice_idToassets?: Array<orders>;

    @Field(() => AssetsCount, {nullable:false})
    _count?: AssetsCount;
}
