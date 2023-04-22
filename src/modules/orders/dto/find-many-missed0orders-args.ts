import { ArgsType, Field, InputType, Int } from '@nestjs/graphql';
import { StringNullableFilter } from '../../../@generated/prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../../../@generated/prisma/date-time-filter.input';
import { SortOrder } from '../../../@generated/prisma/sort-order.enum';
import { Type } from 'class-transformer';
import { IntNullableFilter } from '../../../@generated/prisma/int-nullable-filter.input';

@InputType()
export class missedOrdersWhereInput {
  @Field(() => [missedOrdersWhereInput], { nullable: true })
  AND?: Array<missedOrdersWhereInput>;

  @Field(() => [missedOrdersWhereInput], { nullable: true })
  OR?: Array<missedOrdersWhereInput>;

  @Field(() => [missedOrdersWhereInput], { nullable: true })
  NOT?: Array<missedOrdersWhereInput>;

  @Field(() => StringNullableFilter, { nullable: true })
  order_id?: StringNullableFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  order_number?: StringNullableFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  created_at?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  order_created_at?: DateTimeFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  organization_id?: StringNullableFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  terminal_id?: StringNullableFilter;

  @Field(() => IntNullableFilter, { nullable: true })
  system_minutes_config?: IntNullableFilter;
}

@InputType()
export class missedOrdersOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  created_at?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  order_created_at?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  order_id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  order_number?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  organization_id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  terminal_id?: keyof typeof SortOrder;
}

@ArgsType()
export class FindManymissedOrdersArgs {
  @Field(() => missedOrdersWhereInput, { nullable: true })
  @Type(() => missedOrdersWhereInput)
  where?: missedOrdersWhereInput;

  @Field(() => [missedOrdersOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<missedOrdersOrderByWithRelationInput>;

  @Field(() => missedOrdersWhereInput, { nullable: true })
  cursor?: missedOrdersWhereInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;
}
