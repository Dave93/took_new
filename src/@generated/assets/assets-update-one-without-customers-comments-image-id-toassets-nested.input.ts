import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { assetsCreateWithoutCustomers_comments_image_idToassetsInput } from './assets-create-without-customers-comments-image-id-toassets.input';
import { Type } from 'class-transformer';
import { assetsCreateOrConnectWithoutCustomers_comments_image_idToassetsInput } from './assets-create-or-connect-without-customers-comments-image-id-toassets.input';
import { assetsUpsertWithoutCustomers_comments_image_idToassetsInput } from './assets-upsert-without-customers-comments-image-id-toassets.input';
import { assetsWhereUniqueInput } from './assets-where-unique.input';
import { assetsUpdateWithoutCustomers_comments_image_idToassetsInput } from './assets-update-without-customers-comments-image-id-toassets.input';

@InputType()
export class assetsUpdateOneWithoutCustomers_comments_image_idToassetsNestedInput {

    @Field(() => assetsCreateWithoutCustomers_comments_image_idToassetsInput, {nullable:true})
    @Type(() => assetsCreateWithoutCustomers_comments_image_idToassetsInput)
    create?: assetsCreateWithoutCustomers_comments_image_idToassetsInput;

    @Field(() => assetsCreateOrConnectWithoutCustomers_comments_image_idToassetsInput, {nullable:true})
    @Type(() => assetsCreateOrConnectWithoutCustomers_comments_image_idToassetsInput)
    connectOrCreate?: assetsCreateOrConnectWithoutCustomers_comments_image_idToassetsInput;

    @Field(() => assetsUpsertWithoutCustomers_comments_image_idToassetsInput, {nullable:true})
    @Type(() => assetsUpsertWithoutCustomers_comments_image_idToassetsInput)
    upsert?: assetsUpsertWithoutCustomers_comments_image_idToassetsInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => assetsWhereUniqueInput, {nullable:true})
    @Type(() => assetsWhereUniqueInput)
    connect?: assetsWhereUniqueInput;

    @Field(() => assetsUpdateWithoutCustomers_comments_image_idToassetsInput, {nullable:true})
    @Type(() => assetsUpdateWithoutCustomers_comments_image_idToassetsInput)
    update?: assetsUpdateWithoutCustomers_comments_image_idToassetsInput;
}
