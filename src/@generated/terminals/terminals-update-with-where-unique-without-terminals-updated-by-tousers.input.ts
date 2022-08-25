import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { terminalsWhereUniqueInput } from './terminals-where-unique.input';
import { Type } from 'class-transformer';
import { terminalsUpdateWithoutTerminals_updated_byTousersInput } from './terminals-update-without-terminals-updated-by-tousers.input';

@InputType()
export class terminalsUpdateWithWhereUniqueWithoutTerminals_updated_byTousersInput {

    @Field(() => terminalsWhereUniqueInput, {nullable:false})
    @Type(() => terminalsWhereUniqueInput)
    where!: terminalsWhereUniqueInput;

    @Field(() => terminalsUpdateWithoutTerminals_updated_byTousersInput, {nullable:false})
    @Type(() => terminalsUpdateWithoutTerminals_updated_byTousersInput)
    data!: terminalsUpdateWithoutTerminals_updated_byTousersInput;
}
