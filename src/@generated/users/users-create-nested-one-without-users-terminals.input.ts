import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersCreateWithoutUsers_terminalsInput } from './users-create-without-users-terminals.input';
import { Type } from 'class-transformer';
import { usersCreateOrConnectWithoutUsers_terminalsInput } from './users-create-or-connect-without-users-terminals.input';
import { usersWhereUniqueInput } from './users-where-unique.input';

@InputType()
export class usersCreateNestedOneWithoutUsers_terminalsInput {

    @Field(() => usersCreateWithoutUsers_terminalsInput, {nullable:true})
    @Type(() => usersCreateWithoutUsers_terminalsInput)
    create?: usersCreateWithoutUsers_terminalsInput;

    @Field(() => usersCreateOrConnectWithoutUsers_terminalsInput, {nullable:true})
    @Type(() => usersCreateOrConnectWithoutUsers_terminalsInput)
    connectOrCreate?: usersCreateOrConnectWithoutUsers_terminalsInput;

    @Field(() => usersWhereUniqueInput, {nullable:true})
    @Type(() => usersWhereUniqueInput)
    connect?: usersWhereUniqueInput;
}
