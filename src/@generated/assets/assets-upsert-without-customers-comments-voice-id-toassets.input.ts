import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { assetsUpdateWithoutCustomers_comments_voice_idToassetsInput } from './assets-update-without-customers-comments-voice-id-toassets.input';
import { Type } from 'class-transformer';
import { assetsCreateWithoutCustomers_comments_voice_idToassetsInput } from './assets-create-without-customers-comments-voice-id-toassets.input';

@InputType()
export class assetsUpsertWithoutCustomers_comments_voice_idToassetsInput {

    @Field(() => assetsUpdateWithoutCustomers_comments_voice_idToassetsInput, {nullable:false})
    @Type(() => assetsUpdateWithoutCustomers_comments_voice_idToassetsInput)
    update!: assetsUpdateWithoutCustomers_comments_voice_idToassetsInput;

    @Field(() => assetsCreateWithoutCustomers_comments_voice_idToassetsInput, {nullable:false})
    @Type(() => assetsCreateWithoutCustomers_comments_voice_idToassetsInput)
    create!: assetsCreateWithoutCustomers_comments_voice_idToassetsInput;
}
