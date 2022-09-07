import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { customersUpdateManyMutationInput } from './customers-update-many-mutation.input';
import { Type } from 'class-transformer';
import { customersWhereInput } from './customers-where.input';

@ArgsType()
export class UpdateManycustomersArgs {

    @Field(() => customersUpdateManyMutationInput, {nullable:false})
    @Type(() => customersUpdateManyMutationInput)
    data!: customersUpdateManyMutationInput;

    @Field(() => customersWhereInput, {nullable:true})
    @Type(() => customersWhereInput)
    where?: customersWhereInput;
}
