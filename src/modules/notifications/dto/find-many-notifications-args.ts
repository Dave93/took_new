import { ArgsType, Field, InputType, Int } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { StringNullableFilter } from '../../../@generated/prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../../../@generated/prisma/date-time-filter.input';
import { SortOrder } from '../../../@generated/prisma/sort-order.enum';
import { BoolFilter } from '../../../@generated/prisma/bool-filter.input';

@InputType()
export class notificationsWhereInput {
  @Field(() => [notificationsWhereInput], { nullable: true })
  AND?: Array<notificationsWhereInput>;

  @Field(() => [notificationsWhereInput], { nullable: true })
  OR?: Array<notificationsWhereInput>;

  @Field(() => [notificationsWhereInput], { nullable: true })
  NOT?: Array<notificationsWhereInput>;

  @Field(() => StringNullableFilter, { nullable: true })
  title?: StringNullableFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  body?: StringNullableFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  created_at?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  send_at?: DateTimeFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  status?: StringNullableFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  role?: StringNullableFilter;

  @Field(() => BoolFilter, { nullable: true })
  public?: BoolFilter;
}

@InputType()
export class notificationsOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  title?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  body?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  send_at?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  status?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  role?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  created_at?: keyof typeof SortOrder;
}

@ArgsType()
export class FindManynotificationsArgs {
  @Field(() => notificationsWhereInput, { nullable: true })
  @Type(() => notificationsWhereInput)
  where?: notificationsWhereInput;

  @Field(() => [notificationsOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<notificationsOrderByWithRelationInput>;

  @Field(() => notificationsWhereInput, { nullable: true })
  cursor?: notificationsWhereInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;
}
