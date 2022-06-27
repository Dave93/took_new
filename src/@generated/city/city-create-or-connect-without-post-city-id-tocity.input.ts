import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { cityWhereUniqueInput } from './city-where-unique.input';
import { Type } from 'class-transformer';
import { cityCreateWithoutPost_city_idTocityInput } from './city-create-without-post-city-id-tocity.input';

@InputType()
export class cityCreateOrConnectWithoutPost_city_idTocityInput {

    @Field(() => cityWhereUniqueInput, {nullable:false})
    @Type(() => cityWhereUniqueInput)
    where!: cityWhereUniqueInput;

    @Field(() => cityCreateWithoutPost_city_idTocityInput, {nullable:false})
    @Type(() => cityCreateWithoutPost_city_idTocityInput)
    create!: cityCreateWithoutPost_city_idTocityInput;
}
