import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { cityWhereUniqueInput } from './city-where-unique.input';
import { Type } from 'class-transformer';
import { cityCreateWithoutUsers_city_updated_byTousersInput } from './city-create-without-users-city-updated-by-tousers.input';

@InputType()
export class cityCreateOrConnectWithoutUsers_city_updated_byTousersInput {

    @Field(() => cityWhereUniqueInput, {nullable:false})
    @Type(() => cityWhereUniqueInput)
    where!: cityWhereUniqueInput;

    @Field(() => cityCreateWithoutUsers_city_updated_byTousersInput, {nullable:false})
    @Type(() => cityCreateWithoutUsers_city_updated_byTousersInput)
    create!: cityCreateWithoutUsers_city_updated_byTousersInput;
}
