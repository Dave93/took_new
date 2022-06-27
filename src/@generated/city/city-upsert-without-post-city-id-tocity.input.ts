import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { cityUpdateWithoutPost_city_idTocityInput } from './city-update-without-post-city-id-tocity.input';
import { Type } from 'class-transformer';
import { cityCreateWithoutPost_city_idTocityInput } from './city-create-without-post-city-id-tocity.input';

@InputType()
export class cityUpsertWithoutPost_city_idTocityInput {

    @Field(() => cityUpdateWithoutPost_city_idTocityInput, {nullable:false})
    @Type(() => cityUpdateWithoutPost_city_idTocityInput)
    update!: cityUpdateWithoutPost_city_idTocityInput;

    @Field(() => cityCreateWithoutPost_city_idTocityInput, {nullable:false})
    @Type(() => cityCreateWithoutPost_city_idTocityInput)
    create!: cityCreateWithoutPost_city_idTocityInput;
}
