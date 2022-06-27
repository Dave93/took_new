import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersUpdateWithoutCity_created_byTousersInput } from './users-update-without-city-created-by-tousers.input';
import { Type } from 'class-transformer';
import { usersCreateWithoutCity_created_byTousersInput } from './users-create-without-city-created-by-tousers.input';

@InputType()
export class usersUpsertWithoutCity_created_byTousersInput {

    @Field(() => usersUpdateWithoutCity_created_byTousersInput, {nullable:false})
    @Type(() => usersUpdateWithoutCity_created_byTousersInput)
    update!: usersUpdateWithoutCity_created_byTousersInput;

    @Field(() => usersCreateWithoutCity_created_byTousersInput, {nullable:false})
    @Type(() => usersCreateWithoutCity_created_byTousersInput)
    create!: usersCreateWithoutCity_created_byTousersInput;
}
