import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { assetsUpdateInput } from './assets-update.input';
import { Type } from 'class-transformer';
import { assetsWhereUniqueInput } from './assets-where-unique.input';

@ArgsType()
export class UpdateOneassetsArgs {

    @Field(() => assetsUpdateInput, {nullable:false})
    @Type(() => assetsUpdateInput)
    data!: assetsUpdateInput;

    @Field(() => assetsWhereUniqueInput, {nullable:false})
    @Type(() => assetsWhereUniqueInput)
    where!: assetsWhereUniqueInput;
}
