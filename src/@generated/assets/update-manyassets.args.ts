import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { assetsUpdateManyMutationInput } from './assets-update-many-mutation.input';
import { Type } from 'class-transformer';
import { assetsWhereInput } from './assets-where.input';

@ArgsType()
export class UpdateManyassetsArgs {

    @Field(() => assetsUpdateManyMutationInput, {nullable:false})
    @Type(() => assetsUpdateManyMutationInput)
    data!: assetsUpdateManyMutationInput;

    @Field(() => assetsWhereInput, {nullable:true})
    @Type(() => assetsWhereInput)
    where?: assetsWhereInput;
}
