import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { customers_commentsCreateManyCustomers_comments_voice_idToassetsInput } from './customers-comments-create-many-customers-comments-voice-id-toassets.input';
import { Type } from 'class-transformer';

@InputType()
export class customers_commentsCreateManyCustomers_comments_voice_idToassetsInputEnvelope {

    @Field(() => [customers_commentsCreateManyCustomers_comments_voice_idToassetsInput], {nullable:false})
    @Type(() => customers_commentsCreateManyCustomers_comments_voice_idToassetsInput)
    data!: Array<customers_commentsCreateManyCustomers_comments_voice_idToassetsInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
