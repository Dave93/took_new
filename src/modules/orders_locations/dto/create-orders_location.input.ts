import { InputType, Int, Field, Float, ArgsType } from '@nestjs/graphql';

@ArgsType()
export class CreateOrdersLocationInput {
  @Field(() => Float, { description: 'Latitude' })
  latitude: number;

  @Field(() => Float, { description: 'Longitude' })
  longitude: number;

  @Field(() => String, { description: 'appVersion', nullable: true })
  appVersion?: string;
}
