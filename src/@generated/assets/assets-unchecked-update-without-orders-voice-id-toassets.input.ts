import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { customers_commentsUncheckedUpdateManyWithoutCustomers_comments_voice_idToassetsNestedInput } from '../customers-comments/customers-comments-unchecked-update-many-without-customers-comments-voice-id-toassets-nested.input';
import { customers_commentsUncheckedUpdateManyWithoutCustomers_comments_image_idToassetsNestedInput } from '../customers-comments/customers-comments-unchecked-update-many-without-customers-comments-image-id-toassets-nested.input';

@InputType()
export class assetsUncheckedUpdateWithoutOrders_voice_idToassetsInput {

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
}
