import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { assetsWhereInput } from './assets-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyassetsArgs {

    @Field(() => assetsWhereInput, {nullable:true})
    @Type(() => assetsWhereInput)
    where?: assetsWhereInput;
}
