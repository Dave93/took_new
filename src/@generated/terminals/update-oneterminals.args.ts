import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { terminalsUpdateInput } from './terminals-update.input';
import { Type } from 'class-transformer';
import { terminalsWhereUniqueInput } from './terminals-where-unique.input';

@ArgsType()
export class UpdateOneterminalsArgs {

    @Field(() => terminalsUpdateInput, {nullable:false})
    @Type(() => terminalsUpdateInput)
    data!: terminalsUpdateInput;

    @Field(() => terminalsWhereUniqueInput, {nullable:false})
    @Type(() => terminalsWhereUniqueInput)
    where!: terminalsWhereUniqueInput;
}
