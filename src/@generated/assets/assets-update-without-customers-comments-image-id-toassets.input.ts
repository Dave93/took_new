import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { customers_commentsUpdateManyWithoutCustomers_comments_voice_idToassetsNestedInput } from '../customers-comments/customers-comments-update-many-without-customers-comments-voice-id-toassets-nested.input';
import { ordersUpdateManyWithoutOrders_voice_idToassetsNestedInput } from '../orders/orders-update-many-without-orders-voice-id-toassets-nested.input';

@InputType()
export class assetsUpdateWithoutCustomers_comments_image_idToassetsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    model?: string;

    @Field(() => String, {nullable:true})
    file_name?: string;

    @Field(() => String, {nullable:true})
    model_id?: string;

    @Field(() => String, {nullable:true})
    sub_folder?: string;

    @Field(() => customers_commentsUpdateManyWithoutCustomers_comments_voice_idToassetsNestedInput, {nullable:true})
    customers_comments_voice_idToassets?: customers_commentsUpdateManyWithoutCustomers_comments_voice_idToassetsNestedInput;

    @Field(() => ordersUpdateManyWithoutOrders_voice_idToassetsNestedInput, {nullable:true})
    orders_voice_idToassets?: ordersUpdateManyWithoutOrders_voice_idToassetsNestedInput;
}
