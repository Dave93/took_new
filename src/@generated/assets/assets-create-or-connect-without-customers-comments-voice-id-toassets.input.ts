import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { assetsWhereUniqueInput } from './assets-where-unique.input';
import { Type } from 'class-transformer';
import { assetsCreateWithoutCustomers_comments_voice_idToassetsInput } from './assets-create-without-customers-comments-voice-id-toassets.input';

@InputType()
export class assetsCreateOrConnectWithoutCustomers_comments_voice_idToassetsInput {

    @Field(() => assetsWhereUniqueInput, {nullable:false})
    @Type(() => assetsWhereUniqueInput)
    where!: assetsWhereUniqueInput;

    @Field(() => assetsCreateWithoutCustomers_comments_voice_idToassetsInput, {nullable:false})
    @Type(() => assetsCreateWithoutCustomers_comments_voice_idToassetsInput)
    create!: assetsCreateWithoutCustomers_comments_voice_idToassetsInput;
}
