import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { cityCreateWithoutUsers_city_updated_byTousersInput } from './city-create-without-users-city-updated-by-tousers.input';
import { Type } from 'class-transformer';
import { cityCreateOrConnectWithoutUsers_city_updated_byTousersInput } from './city-create-or-connect-without-users-city-updated-by-tousers.input';
import { cityCreateManyUsers_city_updated_byTousersInputEnvelope } from './city-create-many-users-city-updated-by-tousers-input-envelope.input';
import { cityWhereUniqueInput } from './city-where-unique.input';

@InputType()
export class cityUncheckedCreateNestedManyWithoutUsers_city_updated_byTousersInput {

    @Field(() => [cityCreateWithoutUsers_city_updated_byTousersInput], {nullable:true})
    @Type(() => cityCreateWithoutUsers_city_updated_byTousersInput)
    create?: Array<cityCreateWithoutUsers_city_updated_byTousersInput>;

    @Field(() => [cityCreateOrConnectWithoutUsers_city_updated_byTousersInput], {nullable:true})
    @Type(() => cityCreateOrConnectWithoutUsers_city_updated_byTousersInput)
    connectOrCreate?: Array<cityCreateOrConnectWithoutUsers_city_updated_byTousersInput>;

    @Field(() => cityCreateManyUsers_city_updated_byTousersInputEnvelope, {nullable:true})
    @Type(() => cityCreateManyUsers_city_updated_byTousersInputEnvelope)
    createMany?: cityCreateManyUsers_city_updated_byTousersInputEnvelope;

    @Field(() => [cityWhereUniqueInput], {nullable:true})
    @Type(() => cityWhereUniqueInput)
    connect?: Array<cityWhereUniqueInput>;
}
