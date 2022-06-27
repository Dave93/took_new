import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { cityWhereUniqueInput } from './city-where-unique.input';
import { Type } from 'class-transformer';
import { cityCreateWithoutUsers_city_created_byTousersInput } from './city-create-without-users-city-created-by-tousers.input';

@InputType()
export class cityCreateOrConnectWithoutUsers_city_created_byTousersInput {

    @Field(() => cityWhereUniqueInput, {nullable:false})
    @Type(() => cityWhereUniqueInput)
    where!: cityWhereUniqueInput;

    @Field(() => cityCreateWithoutUsers_city_created_byTousersInput, {nullable:false})
    @Type(() => cityCreateWithoutUsers_city_created_byTousersInput)
    create!: cityCreateWithoutUsers_city_created_byTousersInput;
}
