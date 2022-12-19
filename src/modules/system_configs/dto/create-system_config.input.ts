import { InputType, Int, Field, Args, ArgsType } from '@nestjs/graphql';

@InputType()
export class CreateSystemConfig {
  @Field(() => String)
  name: string;
  @Field(() => String)
  value: string;
}

@InputType()
export class CreateSystemConfigInput {
  @Field(() => [CreateSystemConfig], { description: 'Example field (placeholder)' })
  items: CreateSystemConfig[];
}
