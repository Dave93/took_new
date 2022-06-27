import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { cityWhereUniqueInput } from './city-where-unique.input';
import { Type } from 'class-transformer';
import { cityCreateWithoutCity_parent_idTocityInput } from './city-create-without-city-parent-id-tocity.input';

@InputType()
export class cityCreateOrConnectWithoutCity_parent_idTocityInput {

    @Field(() => cityWhereUniqueInput, {nullable:false})
    @Type(() => cityWhereUniqueInput)
    where!: cityWhereUniqueInput;

    @Field(() => cityCreateWithoutCity_parent_idTocityInput, {nullable:false})
    @Type(() => cityCreateWithoutCity_parent_idTocityInput)
    create!: cityCreateWithoutCity_parent_idTocityInput;
}
