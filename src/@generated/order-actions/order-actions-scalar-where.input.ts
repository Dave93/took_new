import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class order_actionsScalarWhereInput {

    @Field(() => [order_actionsScalarWhereInput], {nullable:true})
    AND?: Array<order_actionsScalarWhereInput>;

    @Field(() => [order_actionsScalarWhereInput], {nullable:true})
    OR?: Array<order_actionsScalarWhereInput>;

    @Field(() => [order_actionsScalarWhereInput], {nullable:true})
    NOT?: Array<order_actionsScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    order_id?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    duration?: IntFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    action?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    action_text?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    terminal_id?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    created_by?: StringNullableFilter;
}
