import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TokenService } from './services';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';

@Module({
  providers: [
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
  exports: [JwtStrategy, TokenService],
})
export class TokenModule {}
