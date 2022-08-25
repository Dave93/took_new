import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { terminalsCreateWithoutTerminals_created_byTousersInput } from './terminals-create-without-terminals-created-by-tousers.input';
import { Type } from 'class-transformer';
import { terminalsCreateOrConnectWithoutTerminals_created_byTousersInput } from './terminals-create-or-connect-without-terminals-created-by-tousers.input';
import { terminalsCreateManyTerminals_created_byTousersInputEnvelope } from './terminals-create-many-terminals-created-by-tousers-input-envelope.input';
import { terminalsWhereUniqueInput } from './terminals-where-unique.input';

@InputType()
export class terminalsUncheckedCreateNestedManyWithoutTerminals_created_byTousersInput {

    @Field(() => [terminalsCreateWithoutTerminals_created_byTousersInput], {nullable:true})
    @Type(() => terminalsCreateWithoutTerminals_created_byTousersInput)
    create?: Array<terminalsCreateWithoutTerminals_created_byTousersInput>;

    @Field(() => [terminalsCreateOrConnectWithoutTerminals_created_byTousersInput], {nullable:true})
    @Type(() => terminalsCreateOrConnectWithoutTerminals_created_byTousersInput)
    connectOrCreate?: Array<terminalsCreateOrConnectWithoutTerminals_created_byTousersInput>;

    @Field(() => terminalsCreateManyTerminals_created_byTousersInputEnvelope, {nullable:true})
    @Type(() => terminalsCreateManyTerminals_created_byTousersInputEnvelope)
    createMany?: terminalsCreateManyTerminals_created_byTousersInputEnvelope;

    @Field(() => [terminalsWhereUniqueInput], {nullable:true})
    @Type(() => terminalsWhereUniqueInput)
    connect?: Array<terminalsWhereUniqueInput>;
}
