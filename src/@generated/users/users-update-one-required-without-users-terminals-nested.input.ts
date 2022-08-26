import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersCreateWithoutUsers_terminalsInput } from './users-create-without-users-terminals.input';
import { Type } from 'class-transformer';
import { usersCreateOrConnectWithoutUsers_terminalsInput } from './users-create-or-connect-without-users-terminals.input';
import { usersUpsertWithoutUsers_terminalsInput } from './users-upsert-without-users-terminals.input';
import { usersWhereUniqueInput } from './users-where-unique.input';
import { usersUpdateWithoutUsers_terminalsInput } from './users-update-without-users-terminals.input';

@InputType()
export class usersUpdateOneRequiredWithoutUsers_terminalsNestedInput {

    @Field(() => usersCreateWithoutUsers_terminalsInput, {nullable:true})
    @Type(() => usersCreateWithoutUsers_terminalsInput)
    create?: usersCreateWithoutUsers_terminalsInput;

    @Field(() => usersCreateOrConnectWithoutUsers_terminalsInput, {nullable:true})
    @Type(() => usersCreateOrConnectWithoutUsers_terminalsInput)
    connectOrCreate?: usersCreateOrConnectWithoutUsers_terminalsInput;

    @Field(() => usersUpsertWithoutUsers_terminalsInput, {nullable:true})
    @Type(() => usersUpsertWithoutUsers_terminalsInput)
    upsert?: usersUpsertWithoutUsers_terminalsInput;

    @Field(() => usersWhereUniqueInput, {nullable:true})
    @Type(() => usersWhereUniqueInput)
    connect?: usersWhereUniqueInput;

    @Field(() => usersUpdateWithoutUsers_terminalsInput, {nullable:true})
    @Type(() => usersUpdateWithoutUsers_terminalsInput)
    update?: usersUpdateWithoutUsers_terminalsInput;
}
