import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class assetsCreateManyInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    model!: string;

    @Field(() => String, {nullable:false})
    file_name!: string;

    @Field(() => String, {nullable:true})
    model_id?: string;

    @Field(() => String, {nullable:false})
    sub_folder!: string;
}
