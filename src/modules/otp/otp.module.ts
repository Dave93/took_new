import { Module } from '@nestjs/common';
import { OtpService } from './otp.service';
import { OtpController } from './otp.controller';
import { ConfigModule } from '@nestjs/config';

@Module({
  controllers: [OtpController],
  providers: [OtpService],
  imports: [ConfigModule.forRoot()],
})
export class OtpModule {}
