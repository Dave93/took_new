import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { assetsUpdateWithoutCustomers_comments_image_idToassetsInput } from './assets-update-without-customers-comments-image-id-toassets.input';
import { Type } from 'class-transformer';
import { assetsCreateWithoutCustomers_comments_image_idToassetsInput } from './assets-create-without-customers-comments-image-id-toassets.input';

@InputType()
export class assetsUpsertWithoutCustomers_comments_image_idToassetsInput {

    @Field(() => assetsUpdateWithoutCustomers_comments_image_idToassetsInput, {nullable:false})
    @Type(() => assetsUpdateWithoutCustomers_comments_image_idToassetsInput)
    update!: assetsUpdateWithoutCustomers_comments_image_idToassetsInput;

    @Field(() => assetsCreateWithoutCustomers_comments_image_idToassetsInput, {nullable:false})
    @Type(() => assetsCreateWithoutCustomers_comments_image_idToassetsInput)
    create!: assetsCreateWithoutCustomers_comments_image_idToassetsInput;
}
