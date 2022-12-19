import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class AssetsCount {

    @Field(() => Int, {nullable:false})
    customers_comments_voice_idToassets!: number;

    @Field(() => Int, {nullable:false})
    customers_comments_image_idToassets!: number;

    @Field(() => Int, {nullable:false})
    orders_voice_idToassets!: number;
}
