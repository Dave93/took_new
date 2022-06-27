import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { postCreateManyCity_city_idTocityInput } from './post-create-many-city-city-id-tocity.input';
import { Type } from 'class-transformer';

@InputType()
export class postCreateManyCity_city_idTocityInputEnvelope {

    @Field(() => [postCreateManyCity_city_idTocityInput], {nullable:false})
    @Type(() => postCreateManyCity_city_idTocityInput)
    data!: Array<postCreateManyCity_city_idTocityInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
