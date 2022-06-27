import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { cityCreateManyUsers_city_parent_idTousersInput } from './city-create-many-users-city-parent-id-tousers.input';
import { Type } from 'class-transformer';

@InputType()
export class cityCreateManyUsers_city_parent_idTousersInputEnvelope {

    @Field(() => [cityCreateManyUsers_city_parent_idTousersInput], {nullable:false})
    @Type(() => cityCreateManyUsers_city_parent_idTousersInput)
    data!: Array<cityCreateManyUsers_city_parent_idTousersInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
