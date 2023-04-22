import { ObjectType, Field, Int, ArgsType, InputType } from '@nestjs/graphql';
import { permissionsUncheckedCreateInput } from '../../../@generated/permissions/permissions-unchecked-create.input';
import { Type } from 'class-transformer';
import { permissionsCreateInput } from '../../../@generated/permissions/permissions-create.input';
import { StringFilter } from '../../../@generated/prisma/string-filter.input';
import { permissionsWhereInput } from '../../../@generated/permissions/permissions-where.input';
import { users } from '../../../@generated/users/users.model';

@ObjectType()
export class Notification {
  @Field(() => String)
  id: string;

  @Field(() => String)
  title: string;

  @Field(() => String)
  body: string;

  @Field(() => Date)
  send_at: Date;

  @Field(() => Date)
  created_at: Date;

  @Field(() => String, { nullable: true })
  status: string;

  @Field(() => String, { nullable: true })
  role: string;

  @Field(() => [Boolean], { nullable: true })
  public: boolean;
}

@ObjectType()
export class NotificationStatistic extends Notification {
  @Field(() => String)
  deliver_status: string;

  @Field(() => users)
  user: users;
}

@InputType()
export class notificationsDeleteWhereInput {
  @Field(() => [notificationsDeleteWhereInput], { nullable: true })
  AND?: Array<notificationsDeleteWhereInput>;

  @Field(() => [notificationsDeleteWhereInput], { nullable: true })
  OR?: Array<notificationsDeleteWhereInput>;

  @Field(() => [notificationsDeleteWhereInput], { nullable: true })
  NOT?: Array<notificationsDeleteWhereInput>;

  @Field(() => String, { nullable: true })
  id?: string;
}

@InputType()
export class deleteNotificationInput {
  @Field(() => notificationsDeleteWhereInput, { nullable: true })
  @Type(() => notificationsDeleteWhereInput)
  where?: notificationsDeleteWhereInput;
}

@ArgsType()
export class deleteNotificationArgs {
  @Field(() => deleteNotificationInput, { nullable: true })
  @Type(() => deleteNotificationInput)
  input: deleteNotificationInput;
}

@ObjectType()
export class ElasticNotificationModel {
  @Field(() => String)
  id: string;

  @Field(() => String)
  title: string;

  @Field(() => String)
  body: string;

  @Field(() => Date)
  send_at: Date;

  @Field(() => Date)
  created_at: Date;

  @Field(() => String, { nullable: true })
  status: string;

  @Field(() => String, { nullable: true })
  role: string;

  @Field(() => [String], { nullable: true })
  receiver_user_ids: string[];

  @Field(() => [String], { nullable: true })
  sent_user_ids: string[];

  @Field(() => [String], { nullable: true })
  read_user_ids: string[];

  @Field(() => Boolean, { nullable: true })
  is_read: boolean;
}
