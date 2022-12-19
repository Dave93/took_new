import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { customers_commentsUncheckedUpdateManyWithoutCustomers_comments_voice_idToassetsNestedInput } from '../customers-comments/customers-comments-unchecked-update-many-without-customers-comments-voice-id-toassets-nested.input';
import { customers_commentsUncheckedUpdateManyWithoutCustomers_comments_image_idToassetsNestedInput } from '../customers-comments/customers-comments-unchecked-update-many-without-customers-comments-image-id-toassets-nested.input';
import { ordersUncheckedUpdateManyWithoutOrders_voice_idToassetsNestedInput } from '../orders/orders-unchecked-update-many-without-orders-voice-id-toassets-nested.input';

@InputType()
export class assetsUncheckedUpdateInput {

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

    @Field(() => customers_commentsUncheckedUpdateManyWithoutCustomers_comments_voice_idToassetsNestedInput, {nullable:true})
    customers_comments_voice_idToassets?: customers_commentsUncheckedUpdateManyWithoutCustomers_comments_voice_idToassetsNestedInput;

    @Field(() => customers_commentsUncheckedUpdateManyWithoutCustomers_comments_image_idToassetsNestedInput, {nullable:true})
    customers_comments_image_idToassets?: customers_commentsUncheckedUpdateManyWithoutCustomers_comments_image_idToassetsNestedInput;

    @Field(() => ordersUncheckedUpdateManyWithoutOrders_voice_idToassetsNestedInput, {nullable:true})
    orders_voice_idToassets?: ordersUncheckedUpdateManyWithoutOrders_voice_idToassetsNestedInput;
}
