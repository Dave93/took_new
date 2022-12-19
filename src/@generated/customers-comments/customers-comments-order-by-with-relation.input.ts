import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { usersOrderByWithRelationInput } from '../users/users-order-by-with-relation.input';
import { customersOrderByWithRelationInput } from '../customers/customers-order-by-with-relation.input';
import { assetsOrderByWithRelationInput } from '../assets/assets-order-by-with-relation.input';

@InputType()
export class customers_commentsOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    customer_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    comment?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    voice_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    image_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_by?: keyof typeof SortOrder;

    @Field(() => usersOrderByWithRelationInput, {nullable:true})
    customers_comments_created_byTousers?: usersOrderByWithRelationInput;

    @Field(() => customersOrderByWithRelationInput, {nullable:true})
    customers_comments_customers?: customersOrderByWithRelationInput;

    @Field(() => assetsOrderByWithRelationInput, {nullable:true})
    customers_comments_voice_idToassets?: assetsOrderByWithRelationInput;

    @Field(() => assetsOrderByWithRelationInput, {nullable:true})
    customers_comments_image_idToassets?: assetsOrderByWithRelationInput;
}
