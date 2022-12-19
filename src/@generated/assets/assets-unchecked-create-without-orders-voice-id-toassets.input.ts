import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { customers_commentsUncheckedCreateNestedManyWithoutCustomers_comments_voice_idToassetsInput } from '../customers-comments/customers-comments-unchecked-create-nested-many-without-customers-comments-voice-id-toassets.input';
import { customers_commentsUncheckedCreateNestedManyWithoutCustomers_comments_image_idToassetsInput } from '../customers-comments/customers-comments-unchecked-create-nested-many-without-customers-comments-image-id-toassets.input';

@InputType()
export class assetsUncheckedCreateWithoutOrders_voice_idToassetsInput {

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

    @Field(() => customers_commentsUncheckedCreateNestedManyWithoutCustomers_comments_voice_idToassetsInput, {nullable:true})
    customers_comments_voice_idToassets?: customers_commentsUncheckedCreateNestedManyWithoutCustomers_comments_voice_idToassetsInput;

    @Field(() => customers_commentsUncheckedCreateNestedManyWithoutCustomers_comments_image_idToassetsInput, {nullable:true})
    customers_comments_image_idToassets?: customers_commentsUncheckedCreateNestedManyWithoutCustomers_comments_image_idToassetsInput;
}
