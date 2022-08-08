import { UserResponseDto } from './user-response.dto';
import { AuthAccessDto } from './auth-access.dto';
import { TokenDto } from './token.dto';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class LoginResponseDto {
  @Field(() => TokenDto)
  token: TokenDto;
  @Field(() => UserResponseDto)
  user: UserResponseDto;
  @Field(() => AuthAccessDto)
  access: AuthAccessDto;
}
