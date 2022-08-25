import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { terminalsCreateWithoutTerminals_updated_byTousersInput } from './terminals-create-without-terminals-updated-by-tousers.input';
import { Type } from 'class-transformer';
import { terminalsCreateOrConnectWithoutTerminals_updated_byTousersInput } from './terminals-create-or-connect-without-terminals-updated-by-tousers.input';
import { terminalsCreateManyTerminals_updated_byTousersInputEnvelope } from './terminals-create-many-terminals-updated-by-tousers-input-envelope.input';
import { terminalsWhereUniqueInput } from './terminals-where-unique.input';

@InputType()
export class terminalsCreateNestedManyWithoutTerminals_updated_byTousersInput {

    @Field(() => [terminalsCreateWithoutTerminals_updated_byTousersInput], {nullable:true})
    @Type(() => terminalsCreateWithoutTerminals_updated_byTousersInput)
    create?: Array<terminalsCreateWithoutTerminals_updated_byTousersInput>;

    @Field(() => [terminalsCreateOrConnectWithoutTerminals_updated_byTousersInput], {nullable:true})
    @Type(() => terminalsCreateOrConnectWithoutTerminals_updated_byTousersInput)
    connectOrCreate?: Array<terminalsCreateOrConnectWithoutTerminals_updated_byTousersInput>;

    @Field(() => terminalsCreateManyTerminals_updated_byTousersInputEnvelope, {nullable:true})
    @Type(() => terminalsCreateManyTerminals_updated_byTousersInputEnvelope)
    createMany?: terminalsCreateManyTerminals_updated_byTousersInputEnvelope;

    @Field(() => [terminalsWhereUniqueInput], {nullable:true})
    @Type(() => terminalsWhereUniqueInput)
    connect?: Array<terminalsWhereUniqueInput>;
}
