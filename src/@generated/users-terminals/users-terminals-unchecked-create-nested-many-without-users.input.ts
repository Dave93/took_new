import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { users_terminalsCreateWithoutUsersInput } from './users-terminals-create-without-users.input';
import { Type } from 'class-transformer';
import { users_terminalsCreateOrConnectWithoutUsersInput } from './users-terminals-create-or-connect-without-users.input';
import { users_terminalsCreateManyUsersInputEnvelope } from './users-terminals-create-many-users-input-envelope.input';
import { users_terminalsWhereUniqueInput } from './users-terminals-where-unique.input';

@InputType()
export class users_terminalsUncheckedCreateNestedManyWithoutUsersInput {

    @Field(() => [users_terminalsCreateWithoutUsersInput], {nullable:true})
    @Type(() => users_terminalsCreateWithoutUsersInput)
    create?: Array<users_terminalsCreateWithoutUsersInput>;

    @Field(() => [users_terminalsCreateOrConnectWithoutUsersInput], {nullable:true})
    @Type(() => users_terminalsCreateOrConnectWithoutUsersInput)
    connectOrCreate?: Array<users_terminalsCreateOrConnectWithoutUsersInput>;

    @Field(() => users_terminalsCreateManyUsersInputEnvelope, {nullable:true})
    @Type(() => users_terminalsCreateManyUsersInputEnvelope)
    createMany?: users_terminalsCreateManyUsersInputEnvelope;

    @Field(() => [users_terminalsWhereUniqueInput], {nullable:true})
    @Type(() => users_terminalsWhereUniqueInput)
    connect?: Array<users_terminalsWhereUniqueInput>;
}
