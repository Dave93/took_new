import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { cityCreateManyUsers_city_updated_byTousersInput } from './city-create-many-users-city-updated-by-tousers.input';
import { Type } from 'class-transformer';

@InputType()
export class cityCreateManyUsers_city_updated_byTousersInputEnvelope {

    @Field(() => [cityCreateManyUsers_city_updated_byTousersInput], {nullable:false})
    @Type(() => cityCreateManyUsers_city_updated_byTousersInput)
    data!: Array<cityCreateManyUsers_city_updated_byTousersInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
