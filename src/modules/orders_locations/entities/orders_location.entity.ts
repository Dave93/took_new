import { ObjectType, Field, Int, Float } from '@nestjs/graphql';

@ObjectType()
class Location {
  @Field(() => Float)
  lat: number;

  @Field(() => Float)
  lon: number;
}

@ObjectType()
export class OrdersLocationEntity {
  @Field(() => String, { description: 'Order Id' })
  order_id: string;

  @Field(() => String, { description: 'Order Status Id' })
  order_status_id: string;

  @Field(() => String, { description: 'Terminal Id' })
  terminal_id: string;

  @Field(() => String, { description: 'Courier Id' })
  courier_id: string;

  @Field(() => String, { description: 'Created At' })
  created_at: string;

  @Field(() => Location, { description: 'Location' })
  location: Location;

  @Field(() => String, { description: 'Status Color', nullable: true })
  status_color: string;

  @Field(() => String, { description: 'Status Name', nullable: true })
  status_name: string;
}
