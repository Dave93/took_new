import { InputType, Int, Field, ArgsType, Float } from '@nestjs/graphql';
import { order_transactionsUncheckedCreateInput } from '../../../@generated/order-transactions/order-transactions-unchecked-create.input';
import { Type } from 'class-transformer';
import { order_transactionsCreateInput } from '../../../@generated/order-transactions/order-transactions-create.input';

type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };
type XOR<T, U> = T extends object ? (U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U) : T;

@InputType()
export class CreateNotificationInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}

@ArgsType()
export class NotificationCreateArgs {
  @Field(() => String)
  title: string;

  @Field(() => String)
  body: string;

  @Field(() => String)
  role: string;

  @Field(() => Date)
  date: Date;
}

@InputType()
export class notificationsUncheckedCreateInput extends NotificationCreateArgs {
  @Field(() => String)
  title: string;

  @Field(() => String)
  body: string;

  @Field(() => String)
  role: string;

  @Field(() => Date)
  send_at: Date;

  @Field(() => Boolean, { nullable: true })
  public?: boolean;
}

@InputType()
export class notificationsCreateInput extends NotificationCreateArgs {
  @Field(() => String)
  title: string;

  @Field(() => String)
  body: string;

  @Field(() => String)
  role: string;

  @Field(() => Date)
  send_at: Date;

  @Field(() => Boolean, { nullable: true })
  public?: boolean;
}

@ArgsType()
export class CreateOnenotificationArgs {
  @Field(() => notificationsUncheckedCreateInput, { nullable: false })
  @Type(() => notificationsUncheckedCreateInput)
  data!: XOR<notificationsCreateInput, notificationsUncheckedCreateInput>;
}
