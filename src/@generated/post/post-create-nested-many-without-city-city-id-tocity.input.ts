import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { postCreateWithoutCity_city_idTocityInput } from './post-create-without-city-city-id-tocity.input';
import { Type } from 'class-transformer';
import { postCreateOrConnectWithoutCity_city_idTocityInput } from './post-create-or-connect-without-city-city-id-tocity.input';
import { postCreateManyCity_city_idTocityInputEnvelope } from './post-create-many-city-city-id-tocity-input-envelope.input';
import { postWhereUniqueInput } from './post-where-unique.input';

@InputType()
export class postCreateNestedManyWithoutCity_city_idTocityInput {

    @Field(() => [postCreateWithoutCity_city_idTocityInput], {nullable:true})
    @Type(() => postCreateWithoutCity_city_idTocityInput)
    create?: Array<postCreateWithoutCity_city_idTocityInput>;

    @Field(() => [postCreateOrConnectWithoutCity_city_idTocityInput], {nullable:true})
    @Type(() => postCreateOrConnectWithoutCity_city_idTocityInput)
    connectOrCreate?: Array<postCreateOrConnectWithoutCity_city_idTocityInput>;

    @Field(() => postCreateManyCity_city_idTocityInputEnvelope, {nullable:true})
    @Type(() => postCreateManyCity_city_idTocityInputEnvelope)
    createMany?: postCreateManyCity_city_idTocityInputEnvelope;

    @Field(() => [postWhereUniqueInput], {nullable:true})
    @Type(() => postWhereUniqueInput)
    connect?: Array<postWhereUniqueInput>;
}
