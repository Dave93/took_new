import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { customersCreateInput } from './customers-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnecustomersArgs {

    @Field(() => customersCreateInput, {nullable:false})
    @Type(() => customersCreateInput)
    data!: customersCreateInput;
}
