import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { assetsCreateWithoutCustomers_comments_image_idToassetsInput } from './assets-create-without-customers-comments-image-id-toassets.input';
import { Type } from 'class-transformer';
import { assetsCreateOrConnectWithoutCustomers_comments_image_idToassetsInput } from './assets-create-or-connect-without-customers-comments-image-id-toassets.input';
import { assetsWhereUniqueInput } from './assets-where-unique.input';

@InputType()
export class assetsCreateNestedOneWithoutCustomers_comments_image_idToassetsInput {

    @Field(() => assetsCreateWithoutCustomers_comments_image_idToassetsInput, {nullable:true})
    @Type(() => assetsCreateWithoutCustomers_comments_image_idToassetsInput)
    create?: assetsCreateWithoutCustomers_comments_image_idToassetsInput;

    @Field(() => assetsCreateOrConnectWithoutCustomers_comments_image_idToassetsInput, {nullable:true})
    @Type(() => assetsCreateOrConnectWithoutCustomers_comments_image_idToassetsInput)
    connectOrCreate?: assetsCreateOrConnectWithoutCustomers_comments_image_idToassetsInput;

    @Field(() => assetsWhereUniqueInput, {nullable:true})
    @Type(() => assetsWhereUniqueInput)
    connect?: assetsWhereUniqueInput;
}
