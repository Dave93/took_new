import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class CityCount {

    @Field(() => Int, {nullable:false})
    post_city_idTocity!: number;

    @Field(() => Int, {nullable:false})
    city_parent_idTocity!: number;
}
