import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { users_terminalsCreateWithoutTerminalsInput } from './users-terminals-create-without-terminals.input';
import { Type } from 'class-transformer';
import { users_terminalsCreateOrConnectWithoutTerminalsInput } from './users-terminals-create-or-connect-without-terminals.input';
import { users_terminalsCreateManyTerminalsInputEnvelope } from './users-terminals-create-many-terminals-input-envelope.input';
import { users_terminalsWhereUniqueInput } from './users-terminals-where-unique.input';

@InputType()
export class users_terminalsUncheckedCreateNestedManyWithoutTerminalsInput {

    @Field(() => [users_terminalsCreateWithoutTerminalsInput], {nullable:true})
    @Type(() => users_terminalsCreateWithoutTerminalsInput)
    create?: Array<users_terminalsCreateWithoutTerminalsInput>;

    @Field(() => [users_terminalsCreateOrConnectWithoutTerminalsInput], {nullable:true})
    @Type(() => users_terminalsCreateOrConnectWithoutTerminalsInput)
    connectOrCreate?: Array<users_terminalsCreateOrConnectWithoutTerminalsInput>;

    @Field(() => users_terminalsCreateManyTerminalsInputEnvelope, {nullable:true})
    @Type(() => users_terminalsCreateManyTerminalsInputEnvelope)
    createMany?: users_terminalsCreateManyTerminalsInputEnvelope;

    @Field(() => [users_terminalsWhereUniqueInput], {nullable:true})
    @Type(() => users_terminalsWhereUniqueInput)
    connect?: Array<users_terminalsWhereUniqueInput>;
}
