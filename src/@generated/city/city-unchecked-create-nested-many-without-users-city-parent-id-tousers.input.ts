import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { cityCreateWithoutUsers_city_parent_idTousersInput } from './city-create-without-users-city-parent-id-tousers.input';
import { Type } from 'class-transformer';
import { cityCreateOrConnectWithoutUsers_city_parent_idTousersInput } from './city-create-or-connect-without-users-city-parent-id-tousers.input';
import { cityCreateManyUsers_city_parent_idTousersInputEnvelope } from './city-create-many-users-city-parent-id-tousers-input-envelope.input';
import { cityWhereUniqueInput } from './city-where-unique.input';

@InputType()
export class cityUncheckedCreateNestedManyWithoutUsers_city_parent_idTousersInput {

    @Field(() => [cityCreateWithoutUsers_city_parent_idTousersInput], {nullable:true})
    @Type(() => cityCreateWithoutUsers_city_parent_idTousersInput)
    create?: Array<cityCreateWithoutUsers_city_parent_idTousersInput>;

    @Field(() => [cityCreateOrConnectWithoutUsers_city_parent_idTousersInput], {nullable:true})
    @Type(() => cityCreateOrConnectWithoutUsers_city_parent_idTousersInput)
    connectOrCreate?: Array<cityCreateOrConnectWithoutUsers_city_parent_idTousersInput>;

    @Field(() => cityCreateManyUsers_city_parent_idTousersInputEnvelope, {nullable:true})
    @Type(() => cityCreateManyUsers_city_parent_idTousersInputEnvelope)
    createMany?: cityCreateManyUsers_city_parent_idTousersInputEnvelope;

    @Field(() => [cityWhereUniqueInput], {nullable:true})
    @Type(() => cityWhereUniqueInput)
    connect?: Array<cityWhereUniqueInput>;
}
