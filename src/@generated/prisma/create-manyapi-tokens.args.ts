import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { api_tokensCreateManyInput } from '../api-tokens/api-tokens-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyapiTokensArgs {

    @Field(() => [api_tokensCreateManyInput], {nullable:false})
    @Type(() => api_tokensCreateManyInput)
    data!: Array<api_tokensCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
