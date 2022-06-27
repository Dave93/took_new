import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersWhereUniqueInput } from './users-where-unique.input';
import { Type } from 'class-transformer';
import { usersCreateWithoutCity_created_byTousersInput } from './users-create-without-city-created-by-tousers.input';

@InputType()
export class usersCreateOrConnectWithoutCity_created_byTousersInput {

    @Field(() => usersWhereUniqueInput, {nullable:false})
    @Type(() => usersWhereUniqueInput)
    where!: usersWhereUniqueInput;

    @Field(() => usersCreateWithoutCity_created_byTousersInput, {nullable:false})
    @Type(() => usersCreateWithoutCity_created_byTousersInput)
    create!: usersCreateWithoutCity_created_byTousersInput;
}
