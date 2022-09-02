import { ArgsType, Field, Float } from '@nestjs/graphql';

@ArgsType()
export default class OpenTimeEntryArgs {
  @Field(() => Float)
  lat_open: number;

  @Field(() => Float)
  lon_open: number;
}

@ArgsType()
export class CloseTimeEntryArgs {
  @Field(() => Float)
  lat_close: number;

  @Field(() => Float)
  lon_close: number;
}
