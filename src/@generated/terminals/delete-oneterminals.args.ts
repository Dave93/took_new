import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { terminalsWhereUniqueInput } from './terminals-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneterminalsArgs {

    @Field(() => terminalsWhereUniqueInput, {nullable:false})
    @Type(() => terminalsWhereUniqueInput)
    where!: terminalsWhereUniqueInput;
}
