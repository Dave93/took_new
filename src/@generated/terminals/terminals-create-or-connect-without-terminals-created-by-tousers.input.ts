import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { terminalsWhereUniqueInput } from './terminals-where-unique.input';
import { Type } from 'class-transformer';
import { terminalsCreateWithoutTerminals_created_byTousersInput } from './terminals-create-without-terminals-created-by-tousers.input';

@InputType()
export class terminalsCreateOrConnectWithoutTerminals_created_byTousersInput {

    @Field(() => terminalsWhereUniqueInput, {nullable:false})
    @Type(() => terminalsWhereUniqueInput)
    where!: terminalsWhereUniqueInput;

    @Field(() => terminalsCreateWithoutTerminals_created_byTousersInput, {nullable:false})
    @Type(() => terminalsCreateWithoutTerminals_created_byTousersInput)
    create!: terminalsCreateWithoutTerminals_created_byTousersInput;
}
