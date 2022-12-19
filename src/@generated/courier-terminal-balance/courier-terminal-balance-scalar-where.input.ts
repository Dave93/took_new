import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class courier_terminal_balanceScalarWhereInput {

    @Field(() => [courier_terminal_balanceScalarWhereInput], {nullable:true})
    AND?: Array<courier_terminal_balanceScalarWhereInput>;

    @Field(() => [courier_terminal_balanceScalarWhereInput], {nullable:true})
    OR?: Array<courier_terminal_balanceScalarWhereInput>;

    @Field(() => [courier_terminal_balanceScalarWhereInput], {nullable:true})
    NOT?: Array<courier_terminal_balanceScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    courier_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    terminal_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    organization_id?: StringFilter;

    @Field(() => FloatFilter, {nullable:true})
    balance?: FloatFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    created_by?: StringNullableFilter;
}
