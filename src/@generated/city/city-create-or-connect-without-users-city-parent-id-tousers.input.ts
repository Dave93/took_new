import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { cityWhereUniqueInput } from './city-where-unique.input';
import { Type } from 'class-transformer';
import { cityCreateWithoutUsers_city_parent_idTousersInput } from './city-create-without-users-city-parent-id-tousers.input';

@InputType()
export class cityCreateOrConnectWithoutUsers_city_parent_idTousersInput {

    @Field(() => cityWhereUniqueInput, {nullable:false})
    @Type(() => cityWhereUniqueInput)
    where!: cityWhereUniqueInput;

    @Field(() => cityCreateWithoutUsers_city_parent_idTousersInput, {nullable:false})
    @Type(() => cityCreateWithoutUsers_city_parent_idTousersInput)
    create!: cityCreateWithoutUsers_city_parent_idTousersInput;
}
