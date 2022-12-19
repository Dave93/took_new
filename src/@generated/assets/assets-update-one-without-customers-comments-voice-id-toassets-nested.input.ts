import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { assetsCreateWithoutCustomers_comments_voice_idToassetsInput } from './assets-create-without-customers-comments-voice-id-toassets.input';
import { Type } from 'class-transformer';
import { assetsCreateOrConnectWithoutCustomers_comments_voice_idToassetsInput } from './assets-create-or-connect-without-customers-comments-voice-id-toassets.input';
import { assetsUpsertWithoutCustomers_comments_voice_idToassetsInput } from './assets-upsert-without-customers-comments-voice-id-toassets.input';
import { assetsWhereUniqueInput } from './assets-where-unique.input';
import { assetsUpdateWithoutCustomers_comments_voice_idToassetsInput } from './assets-update-without-customers-comments-voice-id-toassets.input';

@InputType()
export class assetsUpdateOneWithoutCustomers_comments_voice_idToassetsNestedInput {

    @Field(() => assetsCreateWithoutCustomers_comments_voice_idToassetsInput, {nullable:true})
    @Type(() => assetsCreateWithoutCustomers_comments_voice_idToassetsInput)
    create?: assetsCreateWithoutCustomers_comments_voice_idToassetsInput;

    @Field(() => assetsCreateOrConnectWithoutCustomers_comments_voice_idToassetsInput, {nullable:true})
    @Type(() => assetsCreateOrConnectWithoutCustomers_comments_voice_idToassetsInput)
    connectOrCreate?: assetsCreateOrConnectWithoutCustomers_comments_voice_idToassetsInput;

    @Field(() => assetsUpsertWithoutCustomers_comments_voice_idToassetsInput, {nullable:true})
    @Type(() => assetsUpsertWithoutCustomers_comments_voice_idToassetsInput)
    upsert?: assetsUpsertWithoutCustomers_comments_voice_idToassetsInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => assetsWhereUniqueInput, {nullable:true})
    @Type(() => assetsWhereUniqueInput)
    connect?: assetsWhereUniqueInput;

    @Field(() => assetsUpdateWithoutCustomers_comments_voice_idToassetsInput, {nullable:true})
    @Type(() => assetsUpdateWithoutCustomers_comments_voice_idToassetsInput)
    update?: assetsUpdateWithoutCustomers_comments_voice_idToassetsInput;
}
