import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class TokenDto {
  @Field(() => String, { description: 'Token type' })
  tokenType: string;
  @Field(() => String, { description: 'Access token' })
  accessToken: string;
  @Field(() => String, { description: 'Access token expires' })
  accessTokenExpires: string;
  @Field(() => String, { description: 'Refresh token' })
  refreshToken: string;
}
