import { users, user_status } from '@prisma/client';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';
import { JwtPayload } from './dto';
import { DisabledUserException, InvalidCredentialsException } from '@common/http/exceptions';
import { ErrorType } from '@common/enums';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private consigService: ConfigService, private readonly prismaService: PrismaService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: consigService.get('TOKEN_SECRET'),
    });
  }

  async validate({ phone }: JwtPayload): Promise<users> {
    const user = await this.prismaService.users.findUnique({
      where: {
        phone,
      },
    });
    if (!user) {
      throw new InvalidCredentialsException();
    }
    if (user.status == user_status.inactive) {
      throw new DisabledUserException(ErrorType.InactiveUser);
    }
    if (user.status == user_status.blocked) {
      throw new DisabledUserException(ErrorType.BlockedUser);
    }
    return user;
  }
}
