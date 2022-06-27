import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersUpdateWithoutCity_updated_byTousersInput } from './users-update-without-city-updated-by-tousers.input';
import { Type } from 'class-transformer';
import { usersCreateWithoutCity_updated_byTousersInput } from './users-create-without-city-updated-by-tousers.input';

@InputType()
export class usersUpsertWithoutCity_updated_byTousersInput {

    @Field(() => usersUpdateWithoutCity_updated_byTousersInput, {nullable:false})
    @Type(() => usersUpdateWithoutCity_updated_byTousersInput)
    update!: usersUpdateWithoutCity_updated_byTousersInput;

    @Field(() => usersCreateWithoutCity_updated_byTousersInput, {nullable:false})
    @Type(() => usersCreateWithoutCity_updated_byTousersInput)
    create!: usersCreateWithoutCity_updated_byTousersInput;
}
