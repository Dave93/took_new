import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { cityUpdateWithoutCity_parent_idTocityInput } from './city-update-without-city-parent-id-tocity.input';
import { Type } from 'class-transformer';
import { cityCreateWithoutCity_parent_idTocityInput } from './city-create-without-city-parent-id-tocity.input';

@InputType()
export class cityUpsertWithoutCity_parent_idTocityInput {

    @Field(() => cityUpdateWithoutCity_parent_idTocityInput, {nullable:false})
    @Type(() => cityUpdateWithoutCity_parent_idTocityInput)
    update!: cityUpdateWithoutCity_parent_idTocityInput;

    @Field(() => cityCreateWithoutCity_parent_idTocityInput, {nullable:false})
    @Type(() => cityCreateWithoutCity_parent_idTocityInput)
    create!: cityCreateWithoutCity_parent_idTocityInput;
}
