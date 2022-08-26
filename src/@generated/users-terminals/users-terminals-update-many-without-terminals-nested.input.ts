import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { users_terminalsCreateWithoutTerminalsInput } from './users-terminals-create-without-terminals.input';
import { Type } from 'class-transformer';
import { users_terminalsCreateOrConnectWithoutTerminalsInput } from './users-terminals-create-or-connect-without-terminals.input';
import { users_terminalsUpsertWithWhereUniqueWithoutTerminalsInput } from './users-terminals-upsert-with-where-unique-without-terminals.input';
import { users_terminalsCreateManyTerminalsInputEnvelope } from './users-terminals-create-many-terminals-input-envelope.input';
import { users_terminalsWhereUniqueInput } from './users-terminals-where-unique.input';
import { users_terminalsUpdateWithWhereUniqueWithoutTerminalsInput } from './users-terminals-update-with-where-unique-without-terminals.input';
import { users_terminalsUpdateManyWithWhereWithoutTerminalsInput } from './users-terminals-update-many-with-where-without-terminals.input';
import { users_terminalsScalarWhereInput } from './users-terminals-scalar-where.input';

@InputType()
export class users_terminalsUpdateManyWithoutTerminalsNestedInput {

    @Field(() => [users_terminalsCreateWithoutTerminalsInput], {nullable:true})
    @Type(() => users_terminalsCreateWithoutTerminalsInput)
    create?: Array<users_terminalsCreateWithoutTerminalsInput>;

    @Field(() => [users_terminalsCreateOrConnectWithoutTerminalsInput], {nullable:true})
    @Type(() => users_terminalsCreateOrConnectWithoutTerminalsInput)
    connectOrCreate?: Array<users_terminalsCreateOrConnectWithoutTerminalsInput>;

    @Field(() => [users_terminalsUpsertWithWhereUniqueWithoutTerminalsInput], {nullable:true})
    @Type(() => users_terminalsUpsertWithWhereUniqueWithoutTerminalsInput)
    upsert?: Array<users_terminalsUpsertWithWhereUniqueWithoutTerminalsInput>;

    @Field(() => users_terminalsCreateManyTerminalsInputEnvelope, {nullable:true})
    @Type(() => users_terminalsCreateManyTerminalsInputEnvelope)
    createMany?: users_terminalsCreateManyTerminalsInputEnvelope;

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

    @Field(() => [users_terminalsUpdateWithWhereUniqueWithoutTerminalsInput], {nullable:true})
    @Type(() => users_terminalsUpdateWithWhereUniqueWithoutTerminalsInput)
    update?: Array<users_terminalsUpdateWithWhereUniqueWithoutTerminalsInput>;

    @Field(() => [users_terminalsUpdateManyWithWhereWithoutTerminalsInput], {nullable:true})
    @Type(() => users_terminalsUpdateManyWithWhereWithoutTerminalsInput)
    updateMany?: Array<users_terminalsUpdateManyWithWhereWithoutTerminalsInput>;

    @Field(() => [users_terminalsScalarWhereInput], {nullable:true})
    @Type(() => users_terminalsScalarWhereInput)
    deleteMany?: Array<users_terminalsScalarWhereInput>;
}
