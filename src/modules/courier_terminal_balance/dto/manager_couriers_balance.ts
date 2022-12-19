import { Field, ID, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ManagerCouriersBalance {
  @Field(() => ID, { nullable: false })
  id!: string;

  @Field(() => String, { nullable: false })
  first_name: string;

  @Field(() => String, { nullable: false })
  last_name: string;

  @Field(() => String, { nullable: false })
  phone: string;

  @Field(() => String, { nullable: false })
  courier_id: string;

  @Field(() => String, { nullable: false })
  terminal_id: string;

  @Field(() => String, { nullable: false })
  terminal_name: string;

  @Field(() => Int, { nullable: false })
  balance: number;
}
