import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { postCreateWithoutCity_city_idTocityInput } from './post-create-without-city-city-id-tocity.input';
import { Type } from 'class-transformer';
import { postCreateOrConnectWithoutCity_city_idTocityInput } from './post-create-or-connect-without-city-city-id-tocity.input';
import { postUpsertWithWhereUniqueWithoutCity_city_idTocityInput } from './post-upsert-with-where-unique-without-city-city-id-tocity.input';
import { postCreateManyCity_city_idTocityInputEnvelope } from './post-create-many-city-city-id-tocity-input-envelope.input';
import { postWhereUniqueInput } from './post-where-unique.input';
import { postUpdateWithWhereUniqueWithoutCity_city_idTocityInput } from './post-update-with-where-unique-without-city-city-id-tocity.input';
import { postUpdateManyWithWhereWithoutCity_city_idTocityInput } from './post-update-many-with-where-without-city-city-id-tocity.input';
import { postScalarWhereInput } from './post-scalar-where.input';

@InputType()
export class postUncheckedUpdateManyWithoutCity_city_idTocityInput {

    @Field(() => [postCreateWithoutCity_city_idTocityInput], {nullable:true})
    @Type(() => postCreateWithoutCity_city_idTocityInput)
    create?: Array<postCreateWithoutCity_city_idTocityInput>;

    @Field(() => [postCreateOrConnectWithoutCity_city_idTocityInput], {nullable:true})
    @Type(() => postCreateOrConnectWithoutCity_city_idTocityInput)
    connectOrCreate?: Array<postCreateOrConnectWithoutCity_city_idTocityInput>;

    @Field(() => [postUpsertWithWhereUniqueWithoutCity_city_idTocityInput], {nullable:true})
    @Type(() => postUpsertWithWhereUniqueWithoutCity_city_idTocityInput)
    upsert?: Array<postUpsertWithWhereUniqueWithoutCity_city_idTocityInput>;

    @Field(() => postCreateManyCity_city_idTocityInputEnvelope, {nullable:true})
    @Type(() => postCreateManyCity_city_idTocityInputEnvelope)
    createMany?: postCreateManyCity_city_idTocityInputEnvelope;

    @Field(() => [postWhereUniqueInput], {nullable:true})
    @Type(() => postWhereUniqueInput)
    set?: Array<postWhereUniqueInput>;

    @Field(() => [postWhereUniqueInput], {nullable:true})
    @Type(() => postWhereUniqueInput)
    disconnect?: Array<postWhereUniqueInput>;

    @Field(() => [postWhereUniqueInput], {nullable:true})
    @Type(() => postWhereUniqueInput)
    delete?: Array<postWhereUniqueInput>;

    @Field(() => [postWhereUniqueInput], {nullable:true})
    @Type(() => postWhereUniqueInput)
    connect?: Array<postWhereUniqueInput>;

    @Field(() => [postUpdateWithWhereUniqueWithoutCity_city_idTocityInput], {nullable:true})
    @Type(() => postUpdateWithWhereUniqueWithoutCity_city_idTocityInput)
    update?: Array<postUpdateWithWhereUniqueWithoutCity_city_idTocityInput>;

    @Field(() => [postUpdateManyWithWhereWithoutCity_city_idTocityInput], {nullable:true})
    @Type(() => postUpdateManyWithWhereWithoutCity_city_idTocityInput)
    updateMany?: Array<postUpdateManyWithWhereWithoutCity_city_idTocityInput>;

    @Field(() => [postScalarWhereInput], {nullable:true})
    @Type(() => postScalarWhereInput)
    deleteMany?: Array<postScalarWhereInput>;
}
