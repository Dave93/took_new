import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { terminalsWhereInput } from './terminals-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyterminalsArgs {

    @Field(() => terminalsWhereInput, {nullable:true})
    @Type(() => terminalsWhereInput)
    where?: terminalsWhereInput;
}
