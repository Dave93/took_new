import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { cityWhereUniqueInput } from './city-where-unique.input';
import { Type } from 'class-transformer';
import { cityUpdateWithoutUsers_city_created_byTousersInput } from './city-update-without-users-city-created-by-tousers.input';

@InputType()
export class cityUpdateWithWhereUniqueWithoutUsers_city_created_byTousersInput {

    @Field(() => cityWhereUniqueInput, {nullable:false})
    @Type(() => cityWhereUniqueInput)
    where!: cityWhereUniqueInput;

    @Field(() => cityUpdateWithoutUsers_city_created_byTousersInput, {nullable:false})
    @Type(() => cityUpdateWithoutUsers_city_created_byTousersInput)
    data!: cityUpdateWithoutUsers_city_created_byTousersInput;
}
