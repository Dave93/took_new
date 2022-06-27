import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersCreateNestedOneWithoutPost_post_created_byTousersInput } from '../users/users-create-nested-one-without-post-post-created-by-tousers.input';
import { usersCreateNestedOneWithoutPost_updated_byTousersInput } from '../users/users-create-nested-one-without-post-updated-by-tousers.input';
import { usersCreateNestedOneWithoutPost_post_user_idTousersInput } from '../users/users-create-nested-one-without-post-post-user-id-tousers.input';
import { Int } from '@nestjs/graphql';
import { price_type } from '../prisma/price-type.enum';
import { status } from '../prisma/status.enum';
import { sale_type } from '../prisma/sale-type.enum';
import { Float } from '@nestjs/graphql';
import { cityCreateNestedOneWithoutPost_city_idTocityInput } from '../city/city-create-nested-one-without-post-city-id-tocity.input';

@InputType()
export class postCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => usersCreateNestedOneWithoutPost_post_created_byTousersInput, {nullable:true})
    users_post_created_byTousers?: usersCreateNestedOneWithoutPost_post_created_byTousersInput;

    @Field(() => usersCreateNestedOneWithoutPost_updated_byTousersInput, {nullable:true})
    users_post_updated_byTousers?: usersCreateNestedOneWithoutPost_updated_byTousersInput;

    @Field(() => usersCreateNestedOneWithoutPost_post_user_idTousersInput, {nullable:false})
    users_post_user_idTousers!: usersCreateNestedOneWithoutPost_post_user_idTousersInput;

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

    @Field(() => cityCreateNestedOneWithoutPost_city_idTocityInput, {nullable:false})
    city_city_idTocity!: cityCreateNestedOneWithoutPost_city_idTocityInput;
}
