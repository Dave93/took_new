import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { terminalsCreateInput } from './terminals-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneterminalsArgs {

    @Field(() => terminalsCreateInput, {nullable:false})
    @Type(() => terminalsCreateInput)
    data!: terminalsCreateInput;
}
