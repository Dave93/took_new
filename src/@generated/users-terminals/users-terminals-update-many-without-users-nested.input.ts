import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { users_terminalsCreateWithoutUsersInput } from './users-terminals-create-without-users.input';
import { Type } from 'class-transformer';
import { users_terminalsCreateOrConnectWithoutUsersInput } from './users-terminals-create-or-connect-without-users.input';
import { users_terminalsUpsertWithWhereUniqueWithoutUsersInput } from './users-terminals-upsert-with-where-unique-without-users.input';
import { users_terminalsCreateManyUsersInputEnvelope } from './users-terminals-create-many-users-input-envelope.input';
import { users_terminalsWhereUniqueInput } from './users-terminals-where-unique.input';
import { users_terminalsUpdateWithWhereUniqueWithoutUsersInput } from './users-terminals-update-with-where-unique-without-users.input';
import { users_terminalsUpdateManyWithWhereWithoutUsersInput } from './users-terminals-update-many-with-where-without-users.input';
import { users_terminalsScalarWhereInput } from './users-terminals-scalar-where.input';

@InputType()
export class users_terminalsUpdateManyWithoutUsersNestedInput {

    @Field(() => [users_terminalsCreateWithoutUsersInput], {nullable:true})
    @Type(() => users_terminalsCreateWithoutUsersInput)
    create?: Array<users_terminalsCreateWithoutUsersInput>;

    @Field(() => [users_terminalsCreateOrConnectWithoutUsersInput], {nullable:true})
    @Type(() => users_terminalsCreateOrConnectWithoutUsersInput)
    connectOrCreate?: Array<users_terminalsCreateOrConnectWithoutUsersInput>;

    @Field(() => [users_terminalsUpsertWithWhereUniqueWithoutUsersInput], {nullable:true})
    @Type(() => users_terminalsUpsertWithWhereUniqueWithoutUsersInput)
    upsert?: Array<users_terminalsUpsertWithWhereUniqueWithoutUsersInput>;

    @Field(() => users_terminalsCreateManyUsersInputEnvelope, {nullable:true})
    @Type(() => users_terminalsCreateManyUsersInputEnvelope)
    createMany?: users_terminalsCreateManyUsersInputEnvelope;

    @Field(() => [users_terminalsWhereUniqueInput], {nullable:true})
    @Type(() => users_terminalsWhereUniqueInput)
    set?: Array<users_terminalsWhereUniqueInput>;

    @Field(() => [users_terminalsWhereUniqueInput], {nullable:true})
    @Type(() => users_terminalsWhereUniqueInput)
    disconnect?: Array<users_terminalsWhereUniqueInput>;

    @Field(() => [users_terminalsWhereUniqueInput], {nullable:true})
    @Type(() => users_terminalsWhereUniqueInput)
    delete?: Array<users_terminalsWhereUniqueInput>;

    @Field(() => [users_terminalsWhereUniqueInput], {nullable:true})
    @Type(() => users_terminalsWhereUniqueInput)
    connect?: Array<users_terminalsWhereUniqueInput>;

    @Field(() => [users_terminalsUpdateWithWhereUniqueWithoutUsersInput], {nullable:true})
    @Type(() => users_terminalsUpdateWithWhereUniqueWithoutUsersInput)
    update?: Array<users_terminalsUpdateWithWhereUniqueWithoutUsersInput>;

    @Field(() => [users_terminalsUpdateManyWithWhereWithoutUsersInput], {nullable:true})
    @Type(() => users_terminalsUpdateManyWithWhereWithoutUsersInput)
    updateMany?: Array<users_terminalsUpdateManyWithWhereWithoutUsersInput>;

    @Field(() => [users_terminalsScalarWhereInput], {nullable:true})
    @Type(() => users_terminalsScalarWhereInput)
    deleteMany?: Array<users_terminalsScalarWhereInput>;
}
