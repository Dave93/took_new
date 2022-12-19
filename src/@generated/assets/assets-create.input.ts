import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { customers_commentsCreateNestedManyWithoutCustomers_comments_voice_idToassetsInput } from '../customers-comments/customers-comments-create-nested-many-without-customers-comments-voice-id-toassets.input';
import { customers_commentsCreateNestedManyWithoutCustomers_comments_image_idToassetsInput } from '../customers-comments/customers-comments-create-nested-many-without-customers-comments-image-id-toassets.input';
import { ordersCreateNestedManyWithoutOrders_voice_idToassetsInput } from '../orders/orders-create-nested-many-without-orders-voice-id-toassets.input';

@InputType()
export class assetsCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    model!: string;

    @Field(() => String, {nullable:false})
    file_name!: string;

    @Field(() => String, {nullable:true})
    model_id?: string;

    @Field(() => String, {nullable:false})
    sub_folder!: string;

    @Field(() => customers_commentsCreateNestedManyWithoutCustomers_comments_voice_idToassetsInput, {nullable:true})
    customers_comments_voice_idToassets?: customers_commentsCreateNestedManyWithoutCustomers_comments_voice_idToassetsInput;

    @Field(() => customers_commentsCreateNestedManyWithoutCustomers_comments_image_idToassetsInput, {nullable:true})
    customers_comments_image_idToassets?: customers_commentsCreateNestedManyWithoutCustomers_comments_image_idToassetsInput;

    @Field(() => ordersCreateNestedManyWithoutOrders_voice_idToassetsInput, {nullable:true})
    orders_voice_idToassets?: ordersCreateNestedManyWithoutOrders_voice_idToassetsInput;
}
