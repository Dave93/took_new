import { ObjectType, Field, Int, ID } from '@nestjs/graphql';

@ObjectType()
export class Brand {
  @Field(() => ID, { nullable: false })
  id!: string;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => String, { nullable: false })
  sign!: string;

  @Field(() => String, { nullable: true })
  logo_path!: string | null;

  @Field(() => Date, { nullable: false })
  created_at!: Date;

  @Field(() => Date, { nullable: false })
  updated_at!: Date;
}
