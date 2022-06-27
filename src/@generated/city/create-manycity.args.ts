import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { cityCreateManyInput } from './city-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManycityArgs {

    @Field(() => [cityCreateManyInput], {nullable:false})
    @Type(() => cityCreateManyInput)
    data!: Array<cityCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
