import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { brandsCreateManyInput } from './brands-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManybrandsArgs {

    @Field(() => [brandsCreateManyInput], {nullable:false})
    @Type(() => brandsCreateManyInput)
    data!: Array<brandsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
