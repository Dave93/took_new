import { ObjectType, Field, Int } from '@nestjs/graphql';
import { orders } from '../../../@generated/orders/orders.model';
import { order_status } from '../../../@generated/order-status/order-status.model';

@ObjectType()
export class Order extends orders {
  @Field(() => [order_status])
  next_buttons: order_status[];
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
