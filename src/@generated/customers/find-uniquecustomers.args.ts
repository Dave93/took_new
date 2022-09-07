import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { customersWhereUniqueInput } from './customers-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquecustomersArgs {

    @Field(() => customersWhereUniqueInput, {nullable:false})
    @Type(() => customersWhereUniqueInput)
    where!: customersWhereUniqueInput;
}
