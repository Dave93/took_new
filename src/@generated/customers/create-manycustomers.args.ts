import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { customersCreateManyInput } from './customers-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManycustomersArgs {

    @Field(() => [customersCreateManyInput], {nullable:false})
    @Type(() => customersCreateManyInput)
    data!: Array<customersCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
