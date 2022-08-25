import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersWhereUniqueInput } from './users-where-unique.input';
import { Type } from 'class-transformer';
import { usersCreateWithoutTerminals_created_byTousersInput } from './users-create-without-terminals-created-by-tousers.input';

@InputType()
export class usersCreateOrConnectWithoutTerminals_created_byTousersInput {

    @Field(() => usersWhereUniqueInput, {nullable:false})
    @Type(() => usersWhereUniqueInput)
    where!: usersWhereUniqueInput;

    @Field(() => usersCreateWithoutTerminals_created_byTousersInput, {nullable:false})
    @Type(() => usersCreateWithoutTerminals_created_byTousersInput)
    create!: usersCreateWithoutTerminals_created_byTousersInput;
}
