import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { postWhereUniqueInput } from './post-where-unique.input';
import { Type } from 'class-transformer';
import { postUpdateWithoutCity_city_idTocityInput } from './post-update-without-city-city-id-tocity.input';

@InputType()
export class postUpdateWithWhereUniqueWithoutCity_city_idTocityInput {

    @Field(() => postWhereUniqueInput, {nullable:false})
    @Type(() => postWhereUniqueInput)
    where!: postWhereUniqueInput;

    @Field(() => postUpdateWithoutCity_city_idTocityInput, {nullable:false})
    @Type(() => postUpdateWithoutCity_city_idTocityInput)
    data!: postUpdateWithoutCity_city_idTocityInput;
}
