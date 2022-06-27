import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { cityWhereUniqueInput } from './city-where-unique.input';
import { Type } from 'class-transformer';
import { cityUpdateWithoutUsers_city_parent_idTousersInput } from './city-update-without-users-city-parent-id-tousers.input';

@InputType()
export class cityUpdateWithWhereUniqueWithoutUsers_city_parent_idTousersInput {

    @Field(() => cityWhereUniqueInput, {nullable:false})
    @Type(() => cityWhereUniqueInput)
    where!: cityWhereUniqueInput;

    @Field(() => cityUpdateWithoutUsers_city_parent_idTousersInput, {nullable:false})
    @Type(() => cityUpdateWithoutUsers_city_parent_idTousersInput)
    data!: cityUpdateWithoutUsers_city_parent_idTousersInput;
}
