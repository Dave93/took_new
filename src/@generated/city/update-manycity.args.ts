import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { cityUpdateManyMutationInput } from './city-update-many-mutation.input';
import { Type } from 'class-transformer';
import { cityWhereInput } from './city-where.input';

@ArgsType()
export class UpdateManycityArgs {

    @Field(() => cityUpdateManyMutationInput, {nullable:false})
    @Type(() => cityUpdateManyMutationInput)
    data!: cityUpdateManyMutationInput;

    @Field(() => cityWhereInput, {nullable:true})
    @Type(() => cityWhereInput)
    where?: cityWhereInput;
}
