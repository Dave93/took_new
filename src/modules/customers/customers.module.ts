import { Module } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CustomersResolver } from './customers.resolver';
import { PrismaService } from 'src/prisma.service';
import { TokenService } from '@auth';
import { TokenModule } from '@modules/auth/token.module';

@Module({
  imports: [TokenModule],
  providers: [CustomersResolver, CustomersService, PrismaService],
})
export class CustomersModule {}
