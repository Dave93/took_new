import { Field, Float, Int, ObjectType } from '@nestjs/graphql';
import { user_status } from '../../../@generated/prisma/user-status.enum';

@ObjectType()
class GarantDeliveryPriceTerminal {
  @Field(() => String, { nullable: true })
  terminal_id: string;

  @Field(() => String, { nullable: true })
  terminal_name: string;

  @Field(() => Int, { nullable: true })
  delivery_price: number;
}
@ObjectType()
class GarantDeliveryPriceOrg {
  @Field(() => String, { nullable: true })
  id: string;

  @Field(() => String, { nullable: true })
  name: string;

  @Field(() => [GarantDeliveryPriceTerminal], { nullable: true })
  children: GarantDeliveryPriceTerminal[];
}

@ObjectType()
class GarantReportItem {
  @Field(() => Date, { nullable: true })
  begin_date: Date;
  @Field(() => Date, { nullable: true })
  last_order_date: Date;
  @Field(() => Int, { nullable: true })
  delivery_price: number;
  @Field(() => String, { nullable: true })
  courier: string;
  @Field(() => String, { nullable: true })
  terminal_name: string;
  @Field(() => Int, { nullable: true })
  orders_count: number;
  @Field(() => String, { nullable: true })
  avg_delivery_time: string;

  @Field(() => String, { nullable: true })
  formatted_avg_delivery_time: string;

  @Field(() => [Date], { nullable: true })
  orders_dates: Date[];
  @Field(() => String, { nullable: true })
  courier_id: string;
  @Field(() => Date, { nullable: true })
  created_at: Date;
  @Field(() => user_status, { nullable: false })
  status!: keyof typeof user_status;

  @Field(() => Int, { nullable: true })
  possible_day_offs: number;

  @Field(() => Float, { nullable: true })
  garant_price: number;

  @Field(() => Int, { nullable: true })
  order_dates_count: number;

  @Field(() => Int, { nullable: true })
  actual_day_offs: number;

  @Field(() => [Date], { nullable: true })
  actual_day_offs_list: Date[];

  @Field(() => Float, { nullable: true })
  balance: number;

  @Field(() => Float, { nullable: true })
  earned: number;

  @Field(() => Float, { nullable: true })
  balance_to_pay: number;

  @Field(() => Int, { nullable: true })
  garant_days: number;

  @Field(() => String, { nullable: true })
  drive_type: string;

  @Field(() => Int, { nullable: true })
  possible_garant_price: number;

  @Field(() => [GarantDeliveryPriceOrg], { nullable: true })
  delivery_price_orgs: GarantDeliveryPriceOrg[];
}

@ObjectType()
class CourierEfficiencyTerminalItem {
  @Field(() => String)
  terminal_id: string;

  @Field(() => String, { nullable: true })
  terminal_name: string;

  @Field(() => Int, { nullable: true })
  courier_count: number;

  @Field(() => Int, { nullable: true })
  total_count: number;

  @Field(() => Float, { nullable: true })
  efficiency: number;

  @Field(() => String, { nullable: true })
  hour_period: string;

  @Field(() => [String], { nullable: true })
  courier_ids: string[];
}

@ObjectType()
class CourierEfficiencyReportItem {
  @Field(() => String)
  courier_id: string;

  @Field(() => String, { nullable: true })
  first_name: string;

  @Field(() => String, { nullable: true })
  last_name: string;

  @Field(() => String, { nullable: true })
  phone: string;

  @Field(() => String, { nullable: true })
  drive_type: string;

  @Field(() => Int, { nullable: true })
  courier_count: number;

  @Field(() => Int, { nullable: true })
  total_count: number;

  @Field(() => Float, { nullable: true })
  efficiency: number;

  @Field(() => [CourierEfficiencyTerminalItem], { nullable: true })
  terminals: CourierEfficiencyTerminalItem[];

  @Field(() => String, { nullable: true })
  period?: string;
}

@ObjectType()
class CourierEfficiencyReportPerDayItem {
  @Field(() => String)
  courier_id: string;

  @Field(() => String, { nullable: true })
  order_day: string;

  @Field(() => Float, { nullable: true })
  efficiency: number;

  @Field(() => [CourierEfficiencyReportItem], { nullable: true })
  hour_period?: CourierEfficiencyReportItem[];
}

export {
  GarantReportItem,
  CourierEfficiencyReportItem,
  CourierEfficiencyReportPerDayItem,
  CourierEfficiencyTerminalItem,
};
