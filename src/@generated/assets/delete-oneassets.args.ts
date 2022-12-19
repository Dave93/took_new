import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { assetsWhereUniqueInput } from './assets-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneassetsArgs {

    @Field(() => assetsWhereUniqueInput, {nullable:false})
    @Type(() => assetsWhereUniqueInput)
    where!: assetsWhereUniqueInput;
}
