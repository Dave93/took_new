import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { cityCreateWithoutUsers_city_created_byTousersInput } from './city-create-without-users-city-created-by-tousers.input';
import { Type } from 'class-transformer';
import { cityCreateOrConnectWithoutUsers_city_created_byTousersInput } from './city-create-or-connect-without-users-city-created-by-tousers.input';
import { cityCreateManyUsers_city_created_byTousersInputEnvelope } from './city-create-many-users-city-created-by-tousers-input-envelope.input';
import { cityWhereUniqueInput } from './city-where-unique.input';

@InputType()
export class cityCreateNestedManyWithoutUsers_city_created_byTousersInput {

    @Field(() => [cityCreateWithoutUsers_city_created_byTousersInput], {nullable:true})
    @Type(() => cityCreateWithoutUsers_city_created_byTousersInput)
    create?: Array<cityCreateWithoutUsers_city_created_byTousersInput>;

    @Field(() => [cityCreateOrConnectWithoutUsers_city_created_byTousersInput], {nullable:true})
    @Type(() => cityCreateOrConnectWithoutUsers_city_created_byTousersInput)
    connectOrCreate?: Array<cityCreateOrConnectWithoutUsers_city_created_byTousersInput>;

    @Field(() => cityCreateManyUsers_city_created_byTousersInputEnvelope, {nullable:true})
    @Type(() => cityCreateManyUsers_city_created_byTousersInputEnvelope)
    createMany?: cityCreateManyUsers_city_created_byTousersInputEnvelope;

    @Field(() => [cityWhereUniqueInput], {nullable:true})
    @Type(() => cityWhereUniqueInput)
    connect?: Array<cityWhereUniqueInput>;
}
