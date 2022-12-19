import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { assetsCreateManyInput } from './assets-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyassetsArgs {

    @Field(() => [assetsCreateManyInput], {nullable:false})
    @Type(() => assetsCreateManyInput)
    data!: Array<assetsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
