import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { terminalsWhereUniqueInput } from './terminals-where-unique.input';
import { Type } from 'class-transformer';
import { terminalsCreateInput } from './terminals-create.input';
import { terminalsUpdateInput } from './terminals-update.input';

@ArgsType()
export class UpsertOneterminalsArgs {

    @Field(() => terminalsWhereUniqueInput, {nullable:false})
    @Type(() => terminalsWhereUniqueInput)
    where!: terminalsWhereUniqueInput;

    @Field(() => terminalsCreateInput, {nullable:false})
    @Type(() => terminalsCreateInput)
    create!: terminalsCreateInput;

    @Field(() => terminalsUpdateInput, {nullable:false})
    @Type(() => terminalsUpdateInput)
    update!: terminalsUpdateInput;
}
