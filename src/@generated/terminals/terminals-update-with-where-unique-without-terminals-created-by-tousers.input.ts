import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { terminalsWhereUniqueInput } from './terminals-where-unique.input';
import { Type } from 'class-transformer';
import { terminalsUpdateWithoutTerminals_created_byTousersInput } from './terminals-update-without-terminals-created-by-tousers.input';

@InputType()
export class terminalsUpdateWithWhereUniqueWithoutTerminals_created_byTousersInput {

    @Field(() => terminalsWhereUniqueInput, {nullable:false})
    @Type(() => terminalsWhereUniqueInput)
    where!: terminalsWhereUniqueInput;

    @Field(() => terminalsUpdateWithoutTerminals_created_byTousersInput, {nullable:false})
    @Type(() => terminalsUpdateWithoutTerminals_created_byTousersInput)
    data!: terminalsUpdateWithoutTerminals_created_byTousersInput;
}
