import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { cityCreateWithoutUsers_city_parent_idTousersInput } from './city-create-without-users-city-parent-id-tousers.input';
import { Type } from 'class-transformer';
import { cityCreateOrConnectWithoutUsers_city_parent_idTousersInput } from './city-create-or-connect-without-users-city-parent-id-tousers.input';
import { cityUpsertWithWhereUniqueWithoutUsers_city_parent_idTousersInput } from './city-upsert-with-where-unique-without-users-city-parent-id-tousers.input';
import { cityCreateManyUsers_city_parent_idTousersInputEnvelope } from './city-create-many-users-city-parent-id-tousers-input-envelope.input';
import { cityWhereUniqueInput } from './city-where-unique.input';
import { cityUpdateWithWhereUniqueWithoutUsers_city_parent_idTousersInput } from './city-update-with-where-unique-without-users-city-parent-id-tousers.input';
import { cityUpdateManyWithWhereWithoutUsers_city_parent_idTousersInput } from './city-update-many-with-where-without-users-city-parent-id-tousers.input';
import { cityScalarWhereInput } from './city-scalar-where.input';

@InputType()
export class cityUpdateManyWithoutUsers_city_parent_idTousersInput {

    @Field(() => [cityCreateWithoutUsers_city_parent_idTousersInput], {nullable:true})
    @Type(() => cityCreateWithoutUsers_city_parent_idTousersInput)
    create?: Array<cityCreateWithoutUsers_city_parent_idTousersInput>;

    @Field(() => [cityCreateOrConnectWithoutUsers_city_parent_idTousersInput], {nullable:true})
    @Type(() => cityCreateOrConnectWithoutUsers_city_parent_idTousersInput)
    connectOrCreate?: Array<cityCreateOrConnectWithoutUsers_city_parent_idTousersInput>;

    @Field(() => [cityUpsertWithWhereUniqueWithoutUsers_city_parent_idTousersInput], {nullable:true})
    @Type(() => cityUpsertWithWhereUniqueWithoutUsers_city_parent_idTousersInput)
    upsert?: Array<cityUpsertWithWhereUniqueWithoutUsers_city_parent_idTousersInput>;

    @Field(() => cityCreateManyUsers_city_parent_idTousersInputEnvelope, {nullable:true})
    @Type(() => cityCreateManyUsers_city_parent_idTousersInputEnvelope)
    createMany?: cityCreateManyUsers_city_parent_idTousersInputEnvelope;

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

    @Field(() => [cityUpdateWithWhereUniqueWithoutUsers_city_parent_idTousersInput], {nullable:true})
    @Type(() => cityUpdateWithWhereUniqueWithoutUsers_city_parent_idTousersInput)
    update?: Array<cityUpdateWithWhereUniqueWithoutUsers_city_parent_idTousersInput>;

    @Field(() => [cityUpdateManyWithWhereWithoutUsers_city_parent_idTousersInput], {nullable:true})
    @Type(() => cityUpdateManyWithWhereWithoutUsers_city_parent_idTousersInput)
    updateMany?: Array<cityUpdateManyWithWhereWithoutUsers_city_parent_idTousersInput>;

    @Field(() => [cityScalarWhereInput], {nullable:true})
    @Type(() => cityScalarWhereInput)
    deleteMany?: Array<cityScalarWhereInput>;
}
