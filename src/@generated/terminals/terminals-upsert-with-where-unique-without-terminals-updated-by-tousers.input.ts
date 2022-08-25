import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { terminalsWhereUniqueInput } from './terminals-where-unique.input';
import { Type } from 'class-transformer';
import { terminalsUpdateWithoutTerminals_updated_byTousersInput } from './terminals-update-without-terminals-updated-by-tousers.input';
import { terminalsCreateWithoutTerminals_updated_byTousersInput } from './terminals-create-without-terminals-updated-by-tousers.input';

@InputType()
export class terminalsUpsertWithWhereUniqueWithoutTerminals_updated_byTousersInput {

    @Field(() => terminalsWhereUniqueInput, {nullable:false})
    @Type(() => terminalsWhereUniqueInput)
    where!: terminalsWhereUniqueInput;

    @Field(() => terminalsUpdateWithoutTerminals_updated_byTousersInput, {nullable:false})
    @Type(() => terminalsUpdateWithoutTerminals_updated_byTousersInput)
    update!: terminalsUpdateWithoutTerminals_updated_byTousersInput;

    @Field(() => terminalsCreateWithoutTerminals_updated_byTousersInput, {nullable:false})
    @Type(() => terminalsCreateWithoutTerminals_updated_byTousersInput)
    create!: terminalsCreateWithoutTerminals_updated_byTousersInput;
}
