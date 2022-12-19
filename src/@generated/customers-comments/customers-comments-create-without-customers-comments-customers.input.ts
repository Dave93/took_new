import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersCreateNestedOneWithoutCustomers_comments_created_byTousersInput } from '../users/users-create-nested-one-without-customers-comments-created-by-tousers.input';
import { assetsCreateNestedOneWithoutCustomers_comments_voice_idToassetsInput } from '../assets/assets-create-nested-one-without-customers-comments-voice-id-toassets.input';
import { assetsCreateNestedOneWithoutCustomers_comments_image_idToassetsInput } from '../assets/assets-create-nested-one-without-customers-comments-image-id-toassets.input';

@InputType()
export class customers_commentsCreateWithoutCustomers_comments_customersInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    comment?: string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => usersCreateNestedOneWithoutCustomers_comments_created_byTousersInput, {nullable:true})
    customers_comments_created_byTousers?: usersCreateNestedOneWithoutCustomers_comments_created_byTousersInput;

    @Field(() => assetsCreateNestedOneWithoutCustomers_comments_voice_idToassetsInput, {nullable:true})
    customers_comments_voice_idToassets?: assetsCreateNestedOneWithoutCustomers_comments_voice_idToassetsInput;

    @Field(() => assetsCreateNestedOneWithoutCustomers_comments_image_idToassetsInput, {nullable:true})
    customers_comments_image_idToassets?: assetsCreateNestedOneWithoutCustomers_comments_image_idToassetsInput;
}
