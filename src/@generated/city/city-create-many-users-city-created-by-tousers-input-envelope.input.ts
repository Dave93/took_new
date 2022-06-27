import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { cityCreateManyUsers_city_created_byTousersInput } from './city-create-many-users-city-created-by-tousers.input';
import { Type } from 'class-transformer';

@InputType()
export class cityCreateManyUsers_city_created_byTousersInputEnvelope {

    @Field(() => [cityCreateManyUsers_city_created_byTousersInput], {nullable:false})
    @Type(() => cityCreateManyUsers_city_created_byTousersInput)
    data!: Array<cityCreateManyUsers_city_created_byTousersInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
