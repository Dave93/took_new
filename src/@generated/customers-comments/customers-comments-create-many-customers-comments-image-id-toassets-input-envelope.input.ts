import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { customers_commentsCreateManyCustomers_comments_image_idToassetsInput } from './customers-comments-create-many-customers-comments-image-id-toassets.input';
import { Type } from 'class-transformer';

@InputType()
export class customers_commentsCreateManyCustomers_comments_image_idToassetsInputEnvelope {

    @Field(() => [customers_commentsCreateManyCustomers_comments_image_idToassetsInput], {nullable:false})
    @Type(() => customers_commentsCreateManyCustomers_comments_image_idToassetsInput)
    data!: Array<customers_commentsCreateManyCustomers_comments_image_idToassetsInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
