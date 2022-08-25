import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { terminalsWhereUniqueInput } from './terminals-where-unique.input';
import { Type } from 'class-transformer';
import { terminalsCreateWithoutTerminals_updated_byTousersInput } from './terminals-create-without-terminals-updated-by-tousers.input';

@InputType()
export class terminalsCreateOrConnectWithoutTerminals_updated_byTousersInput {

    @Field(() => terminalsWhereUniqueInput, {nullable:false})
    @Type(() => terminalsWhereUniqueInput)
    where!: terminalsWhereUniqueInput;

    @Field(() => terminalsCreateWithoutTerminals_updated_byTousersInput, {nullable:false})
    @Type(() => terminalsCreateWithoutTerminals_updated_byTousersInput)
    create!: terminalsCreateWithoutTerminals_updated_byTousersInput;
}
