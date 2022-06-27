import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { users } from '../users/users.model';
import { post } from '../post/post.model';
import { CityCount } from '../prisma/city-count.output';

@ObjectType()
export class city {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    parent_id!: string | null;

    @Field(() => Date, {nullable:false})
    created_at!: Date;

    @Field(() => Date, {nullable:false})
    updated_at!: Date;

    @Field(() => String, {nullable:true})
    created_by!: string | null;

    @Field(() => String, {nullable:true})
    updated_by!: string | null;

    @Field(() => users, {nullable:true})
    users_city_created_byTousers?: users | null;

    @Field(() => users, {nullable:true})
    users_city_updated_byTousers?: users | null;

    @Field(() => city, {nullable:true})
    users_city_parent_idTousers?: city | null;

    @Field(() => [post], {nullable:true})
    post_city_idTocity?: Array<post>;

    @Field(() => [city], {nullable:true})
    city_parent_idTocity?: Array<city>;

    @Field(() => CityCount, {nullable:false})
    _count?: CityCount;
}
