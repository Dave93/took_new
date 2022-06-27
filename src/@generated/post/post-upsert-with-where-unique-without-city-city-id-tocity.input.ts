import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { postWhereUniqueInput } from './post-where-unique.input';
import { Type } from 'class-transformer';
import { postUpdateWithoutCity_city_idTocityInput } from './post-update-without-city-city-id-tocity.input';
import { postCreateWithoutCity_city_idTocityInput } from './post-create-without-city-city-id-tocity.input';

@InputType()
export class postUpsertWithWhereUniqueWithoutCity_city_idTocityInput {

    @Field(() => postWhereUniqueInput, {nullable:false})
    @Type(() => postWhereUniqueInput)
    where!: postWhereUniqueInput;

    @Field(() => postUpdateWithoutCity_city_idTocityInput, {nullable:false})
    @Type(() => postUpdateWithoutCity_city_idTocityInput)
    update!: postUpdateWithoutCity_city_idTocityInput;

    @Field(() => postCreateWithoutCity_city_idTocityInput, {nullable:false})
    @Type(() => postCreateWithoutCity_city_idTocityInput)
    create!: postCreateWithoutCity_city_idTocityInput;
}
