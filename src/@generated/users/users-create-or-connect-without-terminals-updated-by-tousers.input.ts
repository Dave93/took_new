import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersWhereUniqueInput } from './users-where-unique.input';
import { Type } from 'class-transformer';
import { usersCreateWithoutTerminals_updated_byTousersInput } from './users-create-without-terminals-updated-by-tousers.input';

@InputType()
export class usersCreateOrConnectWithoutTerminals_updated_byTousersInput {

    @Field(() => usersWhereUniqueInput, {nullable:false})
    @Type(() => usersWhereUniqueInput)
    where!: usersWhereUniqueInput;

    @Field(() => usersCreateWithoutTerminals_updated_byTousersInput, {nullable:false})
    @Type(() => usersCreateWithoutTerminals_updated_byTousersInput)
    create!: usersCreateWithoutTerminals_updated_byTousersInput;
}
