import { UserResponseDto } from './user-response.dto';
import { AuthAccessDto } from './auth-access.dto';
import { TokenDto } from './token.dto';

export class LoginResponseDto {
  token: TokenDto;
  user: UserResponseDto;
  access: AuthAccessDto;
}
