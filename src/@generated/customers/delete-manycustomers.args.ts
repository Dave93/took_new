import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { customersWhereInput } from './customers-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManycustomersArgs {

    @Field(() => customersWhereInput, {nullable:true})
    @Type(() => customersWhereInput)
    where?: customersWhereInput;
}
