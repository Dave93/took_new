import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { PrismaService } from 'src/prisma.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TokenService } from './services';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard, PermissionsGuard } from './guards';

@Module({
  providers: [
    AuthResolver,
    AuthService,
    PrismaService,
    TokenService,
    JwtStrategy,
    // {
    //   provide: APP_GUARD,
    //   useClass: JwtAuthGuard,
    // },
    // {
    //   provide: APP_GUARD,
    //   useClass: PermissionsGuard,
    // },
  ],
  imports: [
    ConfigModule.forRoot(),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: (config: ConfigService) => ({
        secret: config.get('TOKEN_SECRET'),
        signOptions: {
          expiresIn: config.get('ACCESS_TOKEN_EXPIRES_IN'),
        },
      }),
      inject: [ConfigService],
    }),
  ],
  exports: [JwtStrategy, TokenService, AuthService],
})
export class AuthModule {}
