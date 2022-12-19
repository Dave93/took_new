import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { assetsWhereUniqueInput } from './assets-where-unique.input';
import { Type } from 'class-transformer';
import { assetsCreateInput } from './assets-create.input';
import { assetsUpdateInput } from './assets-update.input';

@ArgsType()
export class UpsertOneassetsArgs {

    @Field(() => assetsWhereUniqueInput, {nullable:false})
    @Type(() => assetsWhereUniqueInput)
    where!: assetsWhereUniqueInput;

    @Field(() => assetsCreateInput, {nullable:false})
    @Type(() => assetsCreateInput)
    create!: assetsCreateInput;

    @Field(() => assetsUpdateInput, {nullable:false})
    @Type(() => assetsUpdateInput)
    update!: assetsUpdateInput;
}
