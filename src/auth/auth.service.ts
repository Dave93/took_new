import { Injectable } from '@nestjs/common';
import { user_status } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreateAuthInput } from './dto/create-auth.input';
import { UpdateAuthInput } from './dto/update-auth.input';

@Injectable()
export class AuthService {
  constructor(private readonly prismaService: PrismaService) {}
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

    console.log(userEntity);

    if (!userEntity) {
      userEntity = await this.prismaService.users.create({
        data: {
          phone,
          is_super_user: false,
          status: user_status.active,
        },
      });
    }

    console.log(userEntity);
  }
}
