import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class customers_commentsCreateManyCustomers_comments_created_byTousersInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    customer_id!: string;

    @Field(() => String, {nullable:true})
    comment?: string;

    @Field(() => String, {nullable:true})
    voice_id?: string;

    @Field(() => String, {nullable:true})
    image_id?: string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;
}
