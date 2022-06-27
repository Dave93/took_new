import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { cityCreateWithoutPost_city_idTocityInput } from './city-create-without-post-city-id-tocity.input';
import { Type } from 'class-transformer';
import { cityCreateOrConnectWithoutPost_city_idTocityInput } from './city-create-or-connect-without-post-city-id-tocity.input';
import { cityWhereUniqueInput } from './city-where-unique.input';

@InputType()
export class cityCreateNestedOneWithoutPost_city_idTocityInput {

    @Field(() => cityCreateWithoutPost_city_idTocityInput, {nullable:true})
    @Type(() => cityCreateWithoutPost_city_idTocityInput)
    create?: cityCreateWithoutPost_city_idTocityInput;

    @Field(() => cityCreateOrConnectWithoutPost_city_idTocityInput, {nullable:true})
    @Type(() => cityCreateOrConnectWithoutPost_city_idTocityInput)
    connectOrCreate?: cityCreateOrConnectWithoutPost_city_idTocityInput;

    @Field(() => cityWhereUniqueInput, {nullable:true})
    @Type(() => cityWhereUniqueInput)
    connect?: cityWhereUniqueInput;
}
