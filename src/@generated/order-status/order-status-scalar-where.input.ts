import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';

@InputType()
export class order_statusScalarWhereInput {

    @Field(() => [order_statusScalarWhereInput], {nullable:true})
    AND?: Array<order_statusScalarWhereInput>;

    @Field(() => [order_statusScalarWhereInput], {nullable:true})
    OR?: Array<order_statusScalarWhereInput>;

    @Field(() => [order_statusScalarWhereInput], {nullable:true})
    NOT?: Array<order_statusScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    sort?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    organization_id?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    color?: StringNullableFilter;

    @Field(() => BoolFilter, {nullable:true})
    finish?: BoolFilter;

    @Field(() => BoolFilter, {nullable:true})
    cancel?: BoolFilter;

    @Field(() => BoolFilter, {nullable:true})
    waiting?: BoolFilter;
}
