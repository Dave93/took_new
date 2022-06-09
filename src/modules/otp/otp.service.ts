import { UserStatus } from '@modules/admin/access/users/user-status.enum';
import { UsersRepository } from '@modules/admin/access/users/users.repository';
import { Injectable, NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import axios from 'axios';
import crypto from 'crypto';
import otpGenerator from 'otp-generator';
import { CreateOtpDto, SendOtpDto } from './dto/create-otp.dto';
import { UpdateOtpDto } from './dto/update-otp.dto';
import { OtpRepository } from './otp.repository';

@Injectable()
export class OtpService {
  constructor(
    @InjectRepository(UsersRepository)
    private usersRepository: UsersRepository,
    private configService: ConfigService,
    private otpRepository: OtpRepository,
  ) {}
  create(createOtpDto: CreateOtpDto) {
    return 'This action adds a new otp';
  }

  findAll() {
    return `This action returns all otp`;
  }

  findOne(id: number) {
    return `This action returns a #${id} otp`;
  }

  update(id: number, updateOtpDto: UpdateOtpDto) {
    return `This action updates a #${id} otp`;
  }

  remove(id: number) {
    return `This action removes a #${id} otp`;
  }

  async sendOtp(sendOtpDto: SendOtpDto) {
    let userEntity = await this.usersRepository.findOne({ phone: sendOtpDto.phone });

    if (!userEntity) {
      userEntity = await this.usersRepository.create({
        phone: sendOtpDto.phone,
        isSuperUser: false,
        status: UserStatus.Active,
      });
    }

    //Generate OTP
    const otp = otpGenerator.generate(6, { alphabets: false, upperCase: false, specialChars: false });
    const now = new Date();
    const expiration_time = this.AddMinutesToDate(now, 10);

    // Creating OTP
    const otpEntity = await this.otpRepository.create({
      userId: userEntity.id,
      otp: otp,
      expiryDate: expiration_time,
    });

    // Create details object containing the phone number and otp id
    var details = {
      timestamp: now,
      check: sendOtpDto.phone,
      success: true,
      message: 'OTP sent to user',
      otp_id: otpEntity.id,
    };

    // Encrypt the details object
    const encoded = await this.encode(JSON.stringify(details));

    let message = `Your OTP is ${otp}`;

    // Send the OTP to the user
    const response = await axios.post(
      'http://91.204.239.44/broker-api/send',
      {
        messages: [
          {
            recipient: sendOtpDto.phone.replace(/[^0-9]/g, ''),
            'message-id': Math.floor(Math.random() * 1000001),
            sms: {
              originator: '3700',
              content: {
                text: message,
              },
            },
          },
        ],
      },
      {
        auth: {
          username: 'dietsahovat',
          password: '3j5YpM27My',
        },
      },
    );

    return { Status: 'Success', Details: encoded };
  }

  sha1(input) {
    return crypto.createHash('sha1').update(input).digest();
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
    var iv = Buffer.from(this.configService.get<string>('CRYPTO_IV'));
    var ivstring = iv.toString('hex');
    var key = this.password_derive_bytes(password, '', 100, 32);
    var cipher = crypto.createCipheriv('aes-256-cbc', key, ivstring);
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
    var decipher = crypto.createDecipheriv('aes-256-cbc', key, ivstring);
    var decrypted = decipher.update(string, 'base64', 'utf8');
    decrypted += decipher.final();
    return decrypted;
  }

  AddMinutesToDate(date, minutes) {
    return new Date(date.getTime() + minutes * 60000);
  }
}
