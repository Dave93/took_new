import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { customers_commentsWhereUniqueInput } from './customers-comments-where-unique.input';
import { Type } from 'class-transformer';
import { customers_commentsUpdateWithoutCustomers_comments_image_idToassetsInput } from './customers-comments-update-without-customers-comments-image-id-toassets.input';
import { customers_commentsCreateWithoutCustomers_comments_image_idToassetsInput } from './customers-comments-create-without-customers-comments-image-id-toassets.input';

@InputType()
export class customers_commentsUpsertWithWhereUniqueWithoutCustomers_comments_image_idToassetsInput {

    @Field(() => customers_commentsWhereUniqueInput, {nullable:false})
    @Type(() => customers_commentsWhereUniqueInput)
    where!: customers_commentsWhereUniqueInput;

    @Field(() => customers_commentsUpdateWithoutCustomers_comments_image_idToassetsInput, {nullable:false})
    @Type(() => customers_commentsUpdateWithoutCustomers_comments_image_idToassetsInput)
    update!: customers_commentsUpdateWithoutCustomers_comments_image_idToassetsInput;

    @Field(() => customers_commentsCreateWithoutCustomers_comments_image_idToassetsInput, {nullable:false})
    @Type(() => customers_commentsCreateWithoutCustomers_comments_image_idToassetsInput)
    create!: customers_commentsCreateWithoutCustomers_comments_image_idToassetsInput;
}
