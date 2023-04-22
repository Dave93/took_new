import { Field, Float, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class YandexDeliveryPricingData {
  @Field(() => String, { nullable: true })
  price: string;

  @Field(() => Float, { nullable: true })
  distance_meters: number;
}

@ObjectType()
export class YandexDeliveryData {
  @Field(() => String, { nullable: true })
  id: string;

  @Field(() => String, { nullable: true })
  corp_client_id: string;

  @Field(() => String, { nullable: true })
  status: string;

  @Field(() => Int, { nullable: true })
  version: number;

  @Field(() => Boolean, { nullable: true })
  skip_door_to_door: boolean;

  @Field(() => Boolean, { nullable: true })
  skip_client_notify: boolean;

  @Field(() => Boolean, { nullable: true })
  skip_emergency_notify: boolean;
}

@ObjectType()
export class YandexDeliveryOrderData {
  @Field(() => String, { nullable: true })
  id: string;

  @Field(() => String, { nullable: true })
  order_id: string;

  @Field(() => Date, { nullable: true })
  created_at: Date;

  @Field(() => YandexDeliveryPricingData, { nullable: true })
  pricing_data: YandexDeliveryPricingData;

  @Field(() => YandexDeliveryData, { nullable: true })
  order_data: YandexDeliveryData;
}
