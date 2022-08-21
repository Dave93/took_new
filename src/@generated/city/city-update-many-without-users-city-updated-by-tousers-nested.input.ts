import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { cityCreateWithoutUsers_city_updated_byTousersInput } from './city-create-without-users-city-updated-by-tousers.input';
import { Type } from 'class-transformer';
import { cityCreateOrConnectWithoutUsers_city_updated_byTousersInput } from './city-create-or-connect-without-users-city-updated-by-tousers.input';
import { cityUpsertWithWhereUniqueWithoutUsers_city_updated_byTousersInput } from './city-upsert-with-where-unique-without-users-city-updated-by-tousers.input';
import { cityCreateManyUsers_city_updated_byTousersInputEnvelope } from './city-create-many-users-city-updated-by-tousers-input-envelope.input';
import { cityWhereUniqueInput } from './city-where-unique.input';
import { cityUpdateWithWhereUniqueWithoutUsers_city_updated_byTousersInput } from './city-update-with-where-unique-without-users-city-updated-by-tousers.input';
import { cityUpdateManyWithWhereWithoutUsers_city_updated_byTousersInput } from './city-update-many-with-where-without-users-city-updated-by-tousers.input';
import { cityScalarWhereInput } from './city-scalar-where.input';

@InputType()
export class cityUpdateManyWithoutUsers_city_updated_byTousersNestedInput {

    @Field(() => [cityCreateWithoutUsers_city_updated_byTousersInput], {nullable:true})
    @Type(() => cityCreateWithoutUsers_city_updated_byTousersInput)
    create?: Array<cityCreateWithoutUsers_city_updated_byTousersInput>;

    @Field(() => [cityCreateOrConnectWithoutUsers_city_updated_byTousersInput], {nullable:true})
    @Type(() => cityCreateOrConnectWithoutUsers_city_updated_byTousersInput)
    connectOrCreate?: Array<cityCreateOrConnectWithoutUsers_city_updated_byTousersInput>;

    @Field(() => [cityUpsertWithWhereUniqueWithoutUsers_city_updated_byTousersInput], {nullable:true})
    @Type(() => cityUpsertWithWhereUniqueWithoutUsers_city_updated_byTousersInput)
    upsert?: Array<cityUpsertWithWhereUniqueWithoutUsers_city_updated_byTousersInput>;

    @Field(() => cityCreateManyUsers_city_updated_byTousersInputEnvelope, {nullable:true})
    @Type(() => cityCreateManyUsers_city_updated_byTousersInputEnvelope)
    createMany?: cityCreateManyUsers_city_updated_byTousersInputEnvelope;

    @Field(() => [cityWhereUniqueInput], {nullable:true})
    @Type(() => cityWhereUniqueInput)
    set?: Array<cityWhereUniqueInput>;

    @Field(() => [cityWhereUniqueInput], {nullable:true})
    @Type(() => cityWhereUniqueInput)
    disconnect?: Array<cityWhereUniqueInput>;

    @Field(() => [cityWhereUniqueInput], {nullable:true})
    @Type(() => cityWhereUniqueInput)
    delete?: Array<cityWhereUniqueInput>;

    @Field(() => [cityWhereUniqueInput], {nullable:true})
    @Type(() => cityWhereUniqueInput)
    connect?: Array<cityWhereUniqueInput>;

    @Field(() => [cityUpdateWithWhereUniqueWithoutUsers_city_updated_byTousersInput], {nullable:true})
    @Type(() => cityUpdateWithWhereUniqueWithoutUsers_city_updated_byTousersInput)
    update?: Array<cityUpdateWithWhereUniqueWithoutUsers_city_updated_byTousersInput>;

    @Field(() => [cityUpdateManyWithWhereWithoutUsers_city_updated_byTousersInput], {nullable:true})
    @Type(() => cityUpdateManyWithWhereWithoutUsers_city_updated_byTousersInput)
    updateMany?: Array<cityUpdateManyWithWhereWithoutUsers_city_updated_byTousersInput>;

    @Field(() => [cityScalarWhereInput], {nullable:true})
    @Type(() => cityScalarWhereInput)
    deleteMany?: Array<cityScalarWhereInput>;
}
