import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { terminalsCreateWithoutTerminals_updated_byTousersInput } from './terminals-create-without-terminals-updated-by-tousers.input';
import { Type } from 'class-transformer';
import { terminalsCreateOrConnectWithoutTerminals_updated_byTousersInput } from './terminals-create-or-connect-without-terminals-updated-by-tousers.input';
import { terminalsUpsertWithWhereUniqueWithoutTerminals_updated_byTousersInput } from './terminals-upsert-with-where-unique-without-terminals-updated-by-tousers.input';
import { terminalsCreateManyTerminals_updated_byTousersInputEnvelope } from './terminals-create-many-terminals-updated-by-tousers-input-envelope.input';
import { terminalsWhereUniqueInput } from './terminals-where-unique.input';
import { terminalsUpdateWithWhereUniqueWithoutTerminals_updated_byTousersInput } from './terminals-update-with-where-unique-without-terminals-updated-by-tousers.input';
import { terminalsUpdateManyWithWhereWithoutTerminals_updated_byTousersInput } from './terminals-update-many-with-where-without-terminals-updated-by-tousers.input';
import { terminalsScalarWhereInput } from './terminals-scalar-where.input';

@InputType()
export class terminalsUpdateManyWithoutTerminals_updated_byTousersNestedInput {

    @Field(() => [terminalsCreateWithoutTerminals_updated_byTousersInput], {nullable:true})
    @Type(() => terminalsCreateWithoutTerminals_updated_byTousersInput)
    create?: Array<terminalsCreateWithoutTerminals_updated_byTousersInput>;

    @Field(() => [terminalsCreateOrConnectWithoutTerminals_updated_byTousersInput], {nullable:true})
    @Type(() => terminalsCreateOrConnectWithoutTerminals_updated_byTousersInput)
    connectOrCreate?: Array<terminalsCreateOrConnectWithoutTerminals_updated_byTousersInput>;

    @Field(() => [terminalsUpsertWithWhereUniqueWithoutTerminals_updated_byTousersInput], {nullable:true})
    @Type(() => terminalsUpsertWithWhereUniqueWithoutTerminals_updated_byTousersInput)
    upsert?: Array<terminalsUpsertWithWhereUniqueWithoutTerminals_updated_byTousersInput>;

    @Field(() => terminalsCreateManyTerminals_updated_byTousersInputEnvelope, {nullable:true})
    @Type(() => terminalsCreateManyTerminals_updated_byTousersInputEnvelope)
    createMany?: terminalsCreateManyTerminals_updated_byTousersInputEnvelope;

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

    @Field(() => [terminalsUpdateWithWhereUniqueWithoutTerminals_updated_byTousersInput], {nullable:true})
    @Type(() => terminalsUpdateWithWhereUniqueWithoutTerminals_updated_byTousersInput)
    update?: Array<terminalsUpdateWithWhereUniqueWithoutTerminals_updated_byTousersInput>;

    @Field(() => [terminalsUpdateManyWithWhereWithoutTerminals_updated_byTousersInput], {nullable:true})
    @Type(() => terminalsUpdateManyWithWhereWithoutTerminals_updated_byTousersInput)
    updateMany?: Array<terminalsUpdateManyWithWhereWithoutTerminals_updated_byTousersInput>;

    @Field(() => [terminalsScalarWhereInput], {nullable:true})
    @Type(() => terminalsScalarWhereInput)
    deleteMany?: Array<terminalsScalarWhereInput>;
}
