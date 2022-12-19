import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { users } from '../users/users.model';
import { customers } from '../customers/customers.model';
import { assets } from '../assets/assets.model';

@ObjectType()
export class customers_comments {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    customer_id!: string;

    @Field(() => String, {nullable:true})
    comment!: string | null;

    @Field(() => String, {nullable:true})
    voice_id!: string | null;

    @Field(() => String, {nullable:true})
    image_id!: string | null;

    @Field(() => Date, {nullable:false})
    created_at!: Date;

    @Field(() => String, {nullable:true})
    created_by!: string | null;

    @Field(() => users, {nullable:true})
    customers_comments_created_byTousers?: users | null;

    @Field(() => customers, {nullable:false})
    customers_comments_customers?: customers;

    @Field(() => assets, {nullable:true})
    customers_comments_voice_idToassets?: assets | null;

    @Field(() => assets, {nullable:true})
    customers_comments_image_idToassets?: assets | null;
}
