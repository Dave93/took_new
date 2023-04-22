import { ObjectType, Field, Int } from '@nestjs/graphql';
import { orders } from '../../../@generated/orders/orders.model';
import { order_status } from '../../../@generated/order-status/order-status.model';
import { YandexDeliveryOrderData } from '@modules/orders/entities/yandex_delivery_data';

@ObjectType()
export class Order extends orders {
  @Field(() => [order_status])
  next_buttons: order_status[];

  @Field(() => Boolean)
  highlight: boolean;
}

@ObjectType()
export class OrderMobilePeriodStat {
  @Field(() => Int)
  successCount: number;

  @Field(() => Int)
  failedCount: number;

  @Field(() => Int)
  totalPrice: number;

  @Field(() => String)
  labelCode: string;
}

@ObjectType()
export class OrdersHistory {
  @Field(() => [orders])
  orders: orders[];

  @Field(() => Int)
  totalCount: number;
}

@ObjectType()
export class MissedOrderEntity {
  @Field(() => String)
  id: string;

  @Field(() => String)
  order_id: string;

  @Field(() => String)
  order_number: string;

  @Field(() => Date)
  created_at: Date;

  @Field(() => Date)
  order_created_at: Date;

  @Field(() => String, { nullable: true })
  organization_id: string;

  @Field(() => String, { nullable: true })
  terminal_id: string;

  @Field(() => Int, { nullable: true })
  system_minutes_config: number;

  @Field(() => String, { nullable: true })
  terminal_name: string;

  @Field(() => String, { nullable: true })
  status: string;

  @Field(() => String, { nullable: true })
  payment_type: string;

  @Field(() => Boolean, { nullable: true })
  allowYandex: boolean;

  @Field(() => Boolean, { nullable: true })
  is_courier_set: boolean;

  @Field(() => order_status, { nullable: true })
  order_status: order_status;

  @Field(() => YandexDeliveryOrderData, { nullable: true })
  yandex_delivery_data: YandexDeliveryOrderData;
}
