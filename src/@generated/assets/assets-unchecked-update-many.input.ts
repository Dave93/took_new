import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class assetsUncheckedUpdateManyInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    model?: string;

    @Field(() => String, {nullable:true})
    file_name?: string;

    @Field(() => String, {nullable:true})
    model_id?: string;

    @Field(() => String, {nullable:true})
    sub_folder?: string;
}
