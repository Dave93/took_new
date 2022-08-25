import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { terminalsUpdateManyMutationInput } from './terminals-update-many-mutation.input';
import { Type } from 'class-transformer';
import { terminalsWhereInput } from './terminals-where.input';

@ArgsType()
export class UpdateManyterminalsArgs {

    @Field(() => terminalsUpdateManyMutationInput, {nullable:false})
    @Type(() => terminalsUpdateManyMutationInput)
    data!: terminalsUpdateManyMutationInput;

    @Field(() => terminalsWhereInput, {nullable:true})
    @Type(() => terminalsWhereInput)
    where?: terminalsWhereInput;
}
