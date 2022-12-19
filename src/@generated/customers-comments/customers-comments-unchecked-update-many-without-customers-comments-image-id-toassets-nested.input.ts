import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { customers_commentsCreateWithoutCustomers_comments_image_idToassetsInput } from './customers-comments-create-without-customers-comments-image-id-toassets.input';
import { Type } from 'class-transformer';
import { customers_commentsCreateOrConnectWithoutCustomers_comments_image_idToassetsInput } from './customers-comments-create-or-connect-without-customers-comments-image-id-toassets.input';
import { customers_commentsUpsertWithWhereUniqueWithoutCustomers_comments_image_idToassetsInput } from './customers-comments-upsert-with-where-unique-without-customers-comments-image-id-toassets.input';
import { customers_commentsCreateManyCustomers_comments_image_idToassetsInputEnvelope } from './customers-comments-create-many-customers-comments-image-id-toassets-input-envelope.input';
import { customers_commentsWhereUniqueInput } from './customers-comments-where-unique.input';
import { customers_commentsUpdateWithWhereUniqueWithoutCustomers_comments_image_idToassetsInput } from './customers-comments-update-with-where-unique-without-customers-comments-image-id-toassets.input';
import { customers_commentsUpdateManyWithWhereWithoutCustomers_comments_image_idToassetsInput } from './customers-comments-update-many-with-where-without-customers-comments-image-id-toassets.input';
import { customers_commentsScalarWhereInput } from './customers-comments-scalar-where.input';

@InputType()
export class customers_commentsUncheckedUpdateManyWithoutCustomers_comments_image_idToassetsNestedInput {

    @Field(() => [customers_commentsCreateWithoutCustomers_comments_image_idToassetsInput], {nullable:true})
    @Type(() => customers_commentsCreateWithoutCustomers_comments_image_idToassetsInput)
    create?: Array<customers_commentsCreateWithoutCustomers_comments_image_idToassetsInput>;

    @Field(() => [customers_commentsCreateOrConnectWithoutCustomers_comments_image_idToassetsInput], {nullable:true})
    @Type(() => customers_commentsCreateOrConnectWithoutCustomers_comments_image_idToassetsInput)
    connectOrCreate?: Array<customers_commentsCreateOrConnectWithoutCustomers_comments_image_idToassetsInput>;

    @Field(() => [customers_commentsUpsertWithWhereUniqueWithoutCustomers_comments_image_idToassetsInput], {nullable:true})
    @Type(() => customers_commentsUpsertWithWhereUniqueWithoutCustomers_comments_image_idToassetsInput)
    upsert?: Array<customers_commentsUpsertWithWhereUniqueWithoutCustomers_comments_image_idToassetsInput>;

    @Field(() => customers_commentsCreateManyCustomers_comments_image_idToassetsInputEnvelope, {nullable:true})
    @Type(() => customers_commentsCreateManyCustomers_comments_image_idToassetsInputEnvelope)
    createMany?: customers_commentsCreateManyCustomers_comments_image_idToassetsInputEnvelope;

    @Field(() => [customers_commentsWhereUniqueInput], {nullable:true})
    @Type(() => customers_commentsWhereUniqueInput)
    set?: Array<customers_commentsWhereUniqueInput>;

    @Field(() => [customers_commentsWhereUniqueInput], {nullable:true})
    @Type(() => customers_commentsWhereUniqueInput)
    disconnect?: Array<customers_commentsWhereUniqueInput>;

    @Field(() => [customers_commentsWhereUniqueInput], {nullable:true})
    @Type(() => customers_commentsWhereUniqueInput)
    delete?: Array<customers_commentsWhereUniqueInput>;

    @Field(() => [customers_commentsWhereUniqueInput], {nullable:true})
    @Type(() => customers_commentsWhereUniqueInput)
    connect?: Array<customers_commentsWhereUniqueInput>;

    @Field(() => [customers_commentsUpdateWithWhereUniqueWithoutCustomers_comments_image_idToassetsInput], {nullable:true})
    @Type(() => customers_commentsUpdateWithWhereUniqueWithoutCustomers_comments_image_idToassetsInput)
    update?: Array<customers_commentsUpdateWithWhereUniqueWithoutCustomers_comments_image_idToassetsInput>;

    @Field(() => [customers_commentsUpdateManyWithWhereWithoutCustomers_comments_image_idToassetsInput], {nullable:true})
    @Type(() => customers_commentsUpdateManyWithWhereWithoutCustomers_comments_image_idToassetsInput)
    updateMany?: Array<customers_commentsUpdateManyWithWhereWithoutCustomers_comments_image_idToassetsInput>;

    @Field(() => [customers_commentsScalarWhereInput], {nullable:true})
    @Type(() => customers_commentsScalarWhereInput)
    deleteMany?: Array<customers_commentsScalarWhereInput>;
}
