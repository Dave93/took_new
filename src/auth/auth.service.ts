import { Injectable } from '@nestjs/common';
import { user_status } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreateAuthInput } from './dto/create-auth.input';
import { UpdateAuthInput } from './dto/update-auth.input';
import { createHash, createCipheriv, createDecipheriv, scryptSync } from 'crypto';
import { generate } from 'otp-generator';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';
import { SendOtpToken } from './entities/auth.entity';

@Injectable()
export class AuthService {
  constructor(private readonly prismaService: PrismaService, private configService: ConfigService) {}
  create(createAuthInput: CreateAuthInput) {
    return 'This action adds a new auth';
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthInput: UpdateAuthInput) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }

  async sendOtp(phone: string) {
    let userEntity = await this.prismaService.users.findUnique({
      where: {
        phone,
      },
    });

    if (!userEntity) {
      userEntity = await this.prismaService.users.create({
        data: {
          phone,
          is_super_user: false,
          status: user_status.active,
        },
      });
    }

    //Generate OTP
    const otp = generate(6, {
      digits: true,
      upperCaseAlphabets: false,
      lowerCaseAlphabets: false,
      specialChars: false,
    });
    const now = new Date();
    const expiration_time = this.AddMinutesToDate(now, 10);

    const otpEntity = await this.prismaService.otp.create({
      data: {
        user_id: userEntity.id,
        otp: otp,
        expiry_date: expiration_time,
      },
    });

    // Create details object containing the phone number and otp id
    const details = {
      timestamp: now,
      check: phone,
      success: true,
      message: 'OTP sent to user',
      otp_id: otpEntity.id,
    };

    // Encrypt the details object
    const encoded = await this.encode(JSON.stringify(details));

    let message = `Your OTP is ${otp}`;

    // Send the OTP to the user
    // const response = await axios.post(
    //   'http://91.204.239.44/broker-api/send',
    //   {
    //     messages: [
    //       {
    //         recipient: phone.replace(/[^0-9]/g, ''),
    //         'message-id': Math.floor(Math.random() * 1000001),
    //         sms: {
    //           originator: '3700',
    //           content: {
    //             text: message,
    //           },
    //         },
    //       },
    //     ],
    //   },
    //   {
    //     auth: {
    //       username: 'dietsahovat',
    //       password: '3j5YpM27My',
    //     },
    //   },
    // );

    let result = new SendOtpToken();
    result.details = encoded;
    return result;
  }

  sha1(input) {
    return createHash('sha1').update(input).digest();
  }

  password_derive_bytes(password, salt, iterations, len) {
    var key = Buffer.from(password + salt);
    for (var i = 0; i < iterations; i++) {
      key = this.sha1(key);
    }
    if (key.length < len) {
      var hx = this.password_derive_bytes(password, salt, iterations - 1, 20);
      for (var counter = 1; key.length < len; ++counter) {
        key = Buffer.concat([key, this.sha1(Buffer.concat([Buffer.from(counter.toString()), hx]))]);
      }
    }
    return Buffer.alloc(len, key);
  }

  async encode(string: string) {
    let password = this.configService.get<string>('CRYPTO_KEY');
    // var iv = Buffer.from(this.configService.get<string>('CRYPTO_IV'));
    // var ivstring = iv.toString('hex');
    const iv = Buffer.alloc(16, 0);
    const key = scryptSync(password, 'GfG', 24);
    var cipher = createCipheriv('aes-192-cbc', key, iv);
    var part1 = cipher.update(string, 'utf8');
    var part2 = cipher.final();
    const encrypted = Buffer.concat([part1, part2]).toString('base64');
    return encrypted;
  }

  async decode(string) {
    let password = this.configService.get<string>('CRYPTO_KEY');
    var iv = Buffer.from(this.configService.get<string>('CRYPTO_IV'));
    var ivstring = iv.toString('hex');
    var key = this.password_derive_bytes(password, '', 100, 32);
    var decipher = createDecipheriv('aes-256-cbc', key, ivstring);
    var decrypted = decipher.update(string, 'base64', 'utf8');
    decrypted += decipher.final();
    return decrypted;
  }

  AddMinutesToDate(date, minutes) {
    return new Date(date.getTime() + minutes * 60000);
  }
}
