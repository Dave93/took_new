import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class OrderItems {
  @Field(() => Number, { nullable: false })
  productId!: number;

  @Field(() => Number, { nullable: false })
  quantity!: number;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => Number, { nullable: false })
  price!: number;
}
