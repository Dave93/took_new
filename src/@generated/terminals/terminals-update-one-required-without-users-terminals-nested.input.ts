import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { terminalsCreateWithoutUsers_terminalsInput } from './terminals-create-without-users-terminals.input';
import { Type } from 'class-transformer';
import { terminalsCreateOrConnectWithoutUsers_terminalsInput } from './terminals-create-or-connect-without-users-terminals.input';
import { terminalsUpsertWithoutUsers_terminalsInput } from './terminals-upsert-without-users-terminals.input';
import { terminalsWhereUniqueInput } from './terminals-where-unique.input';
import { terminalsUpdateWithoutUsers_terminalsInput } from './terminals-update-without-users-terminals.input';

@InputType()
export class terminalsUpdateOneRequiredWithoutUsers_terminalsNestedInput {

    @Field(() => terminalsCreateWithoutUsers_terminalsInput, {nullable:true})
    @Type(() => terminalsCreateWithoutUsers_terminalsInput)
    create?: terminalsCreateWithoutUsers_terminalsInput;

    @Field(() => terminalsCreateOrConnectWithoutUsers_terminalsInput, {nullable:true})
    @Type(() => terminalsCreateOrConnectWithoutUsers_terminalsInput)
    connectOrCreate?: terminalsCreateOrConnectWithoutUsers_terminalsInput;

    @Field(() => terminalsUpsertWithoutUsers_terminalsInput, {nullable:true})
    @Type(() => terminalsUpsertWithoutUsers_terminalsInput)
    upsert?: terminalsUpsertWithoutUsers_terminalsInput;

    @Field(() => terminalsWhereUniqueInput, {nullable:true})
    @Type(() => terminalsWhereUniqueInput)
    connect?: terminalsWhereUniqueInput;

    @Field(() => terminalsUpdateWithoutUsers_terminalsInput, {nullable:true})
    @Type(() => terminalsUpdateWithoutUsers_terminalsInput)
    update?: terminalsUpdateWithoutUsers_terminalsInput;
}
