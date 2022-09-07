import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { customersUpdateInput } from './customers-update.input';
import { Type } from 'class-transformer';
import { customersWhereUniqueInput } from './customers-where-unique.input';

@ArgsType()
export class UpdateOnecustomersArgs {

    @Field(() => customersUpdateInput, {nullable:false})
    @Type(() => customersUpdateInput)
    data!: customersUpdateInput;

    @Field(() => customersWhereUniqueInput, {nullable:false})
    @Type(() => customersWhereUniqueInput)
    where!: customersWhereUniqueInput;
}
