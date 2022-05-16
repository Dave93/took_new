import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateOtpDto {}

export class SendOtpDto {
  @IsNotEmpty()
  @ApiProperty({
    example: '+998909514019',
  })
  phone: string;
}
