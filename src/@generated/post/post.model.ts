import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { users } from '../users/users.model';
import { Int } from '@nestjs/graphql';
import { price_type } from '../prisma/price-type.enum';
import { status } from '../prisma/status.enum';
import { sale_type } from '../prisma/sale-type.enum';
import { Float } from '@nestjs/graphql';
import { city } from '../city/city.model';

@ObjectType()
export class post {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    user_id!: string;

    @Field(() => Date, {nullable:false})
    created_at!: Date;

    @Field(() => Date, {nullable:false})
    updated_at!: Date;

    @Field(() => String, {nullable:true})
    created_by!: string | null;

    @Field(() => String, {nullable:true})
    updated_by!: string | null;

    @Field(() => users, {nullable:true})
    users_post_created_byTousers?: users | null;

    @Field(() => users, {nullable:true})
    users_post_updated_byTousers?: users | null;

    @Field(() => users, {nullable:false})
    users_post_user_idTousers?: users;

    @Field(() => Int, {nullable:false,defaultValue:0})
    price!: number;

    @Field(() => price_type, {nullable:false,defaultValue:'fixed'})
    price_type!: keyof typeof price_type;

    @Field(() => status, {nullable:false,defaultValue:'draft'})
    status!: keyof typeof status;

    @Field(() => sale_type, {nullable:false,defaultValue:'buy'})
    sale_type!: keyof typeof sale_type;

    @Field(() => Float, {nullable:false,defaultValue:0})
    latitude!: number;

    @Field(() => Float, {nullable:false,defaultValue:0})
    longitude!: number;

    @Field(() => String, {nullable:false,defaultValue:''})
    address!: string;

    @Field(() => Int, {nullable:false,defaultValue:0})
    comments_count!: number;

    @Field(() => String, {nullable:false})
    city_id!: string;

    @Field(() => city, {nullable:false})
    city_city_idTocity?: city;
}
