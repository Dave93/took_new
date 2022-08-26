import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersWhereUniqueInput } from './users-where-unique.input';
import { Type } from 'class-transformer';
import { usersCreateWithoutUsers_terminalsInput } from './users-create-without-users-terminals.input';

@InputType()
export class usersCreateOrConnectWithoutUsers_terminalsInput {

    @Field(() => usersWhereUniqueInput, {nullable:false})
    @Type(() => usersWhereUniqueInput)
    where!: usersWhereUniqueInput;

    @Field(() => usersCreateWithoutUsers_terminalsInput, {nullable:false})
    @Type(() => usersCreateWithoutUsers_terminalsInput)
    create!: usersCreateWithoutUsers_terminalsInput;
}
