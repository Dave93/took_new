import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { brandsUpdateManyMutationInput } from './brands-update-many-mutation.input';
import { Type } from 'class-transformer';
import { brandsWhereInput } from './brands-where.input';

@ArgsType()
export class UpdateManybrandsArgs {

    @Field(() => brandsUpdateManyMutationInput, {nullable:false})
    @Type(() => brandsUpdateManyMutationInput)
    data!: brandsUpdateManyMutationInput;

    @Field(() => brandsWhereInput, {nullable:true})
    @Type(() => brandsWhereInput)
    where?: brandsWhereInput;
}
