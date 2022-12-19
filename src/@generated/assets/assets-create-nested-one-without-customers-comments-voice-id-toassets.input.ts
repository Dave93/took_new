import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { assetsCreateWithoutCustomers_comments_voice_idToassetsInput } from './assets-create-without-customers-comments-voice-id-toassets.input';
import { Type } from 'class-transformer';
import { assetsCreateOrConnectWithoutCustomers_comments_voice_idToassetsInput } from './assets-create-or-connect-without-customers-comments-voice-id-toassets.input';
import { assetsWhereUniqueInput } from './assets-where-unique.input';

@InputType()
export class assetsCreateNestedOneWithoutCustomers_comments_voice_idToassetsInput {

    @Field(() => assetsCreateWithoutCustomers_comments_voice_idToassetsInput, {nullable:true})
    @Type(() => assetsCreateWithoutCustomers_comments_voice_idToassetsInput)
    create?: assetsCreateWithoutCustomers_comments_voice_idToassetsInput;

    @Field(() => assetsCreateOrConnectWithoutCustomers_comments_voice_idToassetsInput, {nullable:true})
    @Type(() => assetsCreateOrConnectWithoutCustomers_comments_voice_idToassetsInput)
    connectOrCreate?: assetsCreateOrConnectWithoutCustomers_comments_voice_idToassetsInput;

    @Field(() => assetsWhereUniqueInput, {nullable:true})
    @Type(() => assetsWhereUniqueInput)
    connect?: assetsWhereUniqueInput;
}
