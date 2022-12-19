import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { assetsCreateInput } from './assets-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneassetsArgs {

    @Field(() => assetsCreateInput, {nullable:false})
    @Type(() => assetsCreateInput)
    data!: assetsCreateInput;
}
