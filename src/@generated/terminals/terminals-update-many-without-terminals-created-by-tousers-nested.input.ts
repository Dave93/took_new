import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { terminalsCreateWithoutTerminals_created_byTousersInput } from './terminals-create-without-terminals-created-by-tousers.input';
import { Type } from 'class-transformer';
import { terminalsCreateOrConnectWithoutTerminals_created_byTousersInput } from './terminals-create-or-connect-without-terminals-created-by-tousers.input';
import { terminalsUpsertWithWhereUniqueWithoutTerminals_created_byTousersInput } from './terminals-upsert-with-where-unique-without-terminals-created-by-tousers.input';
import { terminalsCreateManyTerminals_created_byTousersInputEnvelope } from './terminals-create-many-terminals-created-by-tousers-input-envelope.input';
import { terminalsWhereUniqueInput } from './terminals-where-unique.input';
import { terminalsUpdateWithWhereUniqueWithoutTerminals_created_byTousersInput } from './terminals-update-with-where-unique-without-terminals-created-by-tousers.input';
import { terminalsUpdateManyWithWhereWithoutTerminals_created_byTousersInput } from './terminals-update-many-with-where-without-terminals-created-by-tousers.input';
import { terminalsScalarWhereInput } from './terminals-scalar-where.input';

@InputType()
export class terminalsUpdateManyWithoutTerminals_created_byTousersNestedInput {

    @Field(() => [terminalsCreateWithoutTerminals_created_byTousersInput], {nullable:true})
    @Type(() => terminalsCreateWithoutTerminals_created_byTousersInput)
    create?: Array<terminalsCreateWithoutTerminals_created_byTousersInput>;

    @Field(() => [terminalsCreateOrConnectWithoutTerminals_created_byTousersInput], {nullable:true})
    @Type(() => terminalsCreateOrConnectWithoutTerminals_created_byTousersInput)
    connectOrCreate?: Array<terminalsCreateOrConnectWithoutTerminals_created_byTousersInput>;

    @Field(() => [terminalsUpsertWithWhereUniqueWithoutTerminals_created_byTousersInput], {nullable:true})
    @Type(() => terminalsUpsertWithWhereUniqueWithoutTerminals_created_byTousersInput)
    upsert?: Array<terminalsUpsertWithWhereUniqueWithoutTerminals_created_byTousersInput>;

    @Field(() => terminalsCreateManyTerminals_created_byTousersInputEnvelope, {nullable:true})
    @Type(() => terminalsCreateManyTerminals_created_byTousersInputEnvelope)
    createMany?: terminalsCreateManyTerminals_created_byTousersInputEnvelope;

    @Field(() => [terminalsWhereUniqueInput], {nullable:true})
    @Type(() => terminalsWhereUniqueInput)
    set?: Array<terminalsWhereUniqueInput>;

    @Field(() => [terminalsWhereUniqueInput], {nullable:true})
    @Type(() => terminalsWhereUniqueInput)
    disconnect?: Array<terminalsWhereUniqueInput>;

    @Field(() => [terminalsWhereUniqueInput], {nullable:true})
    @Type(() => terminalsWhereUniqueInput)
    delete?: Array<terminalsWhereUniqueInput>;

    @Field(() => [terminalsWhereUniqueInput], {nullable:true})
    @Type(() => terminalsWhereUniqueInput)
    connect?: Array<terminalsWhereUniqueInput>;

    @Field(() => [terminalsUpdateWithWhereUniqueWithoutTerminals_created_byTousersInput], {nullable:true})
    @Type(() => terminalsUpdateWithWhereUniqueWithoutTerminals_created_byTousersInput)
    update?: Array<terminalsUpdateWithWhereUniqueWithoutTerminals_created_byTousersInput>;

    @Field(() => [terminalsUpdateManyWithWhereWithoutTerminals_created_byTousersInput], {nullable:true})
    @Type(() => terminalsUpdateManyWithWhereWithoutTerminals_created_byTousersInput)
    updateMany?: Array<terminalsUpdateManyWithWhereWithoutTerminals_created_byTousersInput>;

    @Field(() => [terminalsScalarWhereInput], {nullable:true})
    @Type(() => terminalsScalarWhereInput)
    deleteMany?: Array<terminalsScalarWhereInput>;
}
