import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersWhereUniqueInput } from './users-where-unique.input';
import { Type } from 'class-transformer';
import { usersCreateWithoutCity_updated_byTousersInput } from './users-create-without-city-updated-by-tousers.input';

@InputType()
export class usersCreateOrConnectWithoutCity_updated_byTousersInput {

    @Field(() => usersWhereUniqueInput, {nullable:false})
    @Type(() => usersWhereUniqueInput)
    where!: usersWhereUniqueInput;

    @Field(() => usersCreateWithoutCity_updated_byTousersInput, {nullable:false})
    @Type(() => usersCreateWithoutCity_updated_byTousersInput)
    create!: usersCreateWithoutCity_updated_byTousersInput;
}
