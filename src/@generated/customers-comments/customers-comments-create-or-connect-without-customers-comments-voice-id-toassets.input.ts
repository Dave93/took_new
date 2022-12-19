import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { customers_commentsWhereUniqueInput } from './customers-comments-where-unique.input';
import { Type } from 'class-transformer';
import { customers_commentsCreateWithoutCustomers_comments_voice_idToassetsInput } from './customers-comments-create-without-customers-comments-voice-id-toassets.input';

@InputType()
export class customers_commentsCreateOrConnectWithoutCustomers_comments_voice_idToassetsInput {

    @Field(() => customers_commentsWhereUniqueInput, {nullable:false})
    @Type(() => customers_commentsWhereUniqueInput)
    where!: customers_commentsWhereUniqueInput;

    @Field(() => customers_commentsCreateWithoutCustomers_comments_voice_idToassetsInput, {nullable:false})
    @Type(() => customers_commentsCreateWithoutCustomers_comments_voice_idToassetsInput)
    create!: customers_commentsCreateWithoutCustomers_comments_voice_idToassetsInput;
}
