import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersUpdateOneWithoutPost_updated_byTousersNestedInput } from '../users/users-update-one-without-post-updated-by-tousers-nested.input';
import { usersUpdateOneRequiredWithoutPost_post_user_idTousersNestedInput } from '../users/users-update-one-required-without-post-post-user-id-tousers-nested.input';
import { Int } from '@nestjs/graphql';
import { price_type } from '../prisma/price-type.enum';
import { status } from '../prisma/status.enum';
import { sale_type } from '../prisma/sale-type.enum';
import { Float } from '@nestjs/graphql';
import { cityUpdateOneRequiredWithoutPost_city_idTocityNestedInput } from '../city/city-update-one-required-without-post-city-id-tocity-nested.input';

@InputType()
export class postUpdateWithoutUsers_post_created_byTousersInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => usersUpdateOneWithoutPost_updated_byTousersNestedInput, {nullable:true})
    users_post_updated_byTousers?: usersUpdateOneWithoutPost_updated_byTousersNestedInput;

    @Field(() => usersUpdateOneRequiredWithoutPost_post_user_idTousersNestedInput, {nullable:true})
    users_post_user_idTousers?: usersUpdateOneRequiredWithoutPost_post_user_idTousersNestedInput;

    @Field(() => Int, {nullable:true})
    price?: number;

    @Field(() => price_type, {nullable:true})
    price_type?: keyof typeof price_type;

    @Field(() => status, {nullable:true})
    status?: keyof typeof status;

    @Field(() => sale_type, {nullable:true})
    sale_type?: keyof typeof sale_type;

    @Field(() => Float, {nullable:true})
    latitude?: number;

    @Field(() => Float, {nullable:true})
    longitude?: number;

    @Field(() => String, {nullable:true})
    address?: string;

    @Field(() => Int, {nullable:true})
    comments_count?: number;

    @Field(() => cityUpdateOneRequiredWithoutPost_city_idTocityNestedInput, {nullable:true})
    city_city_idTocity?: cityUpdateOneRequiredWithoutPost_city_idTocityNestedInput;
}
