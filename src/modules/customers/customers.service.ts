import { Injectable } from '@nestjs/common';
import { CreateOnecustomersArgs } from 'src/@generated/customers/create-onecustomers.args';
import { customersWhereInput } from 'src/@generated/customers/customers-where.input';
import { FindManycustomersArgs } from 'src/@generated/customers/find-manycustomers.args';
import { PrismaService } from 'src/prisma.service';
import { CreateCustomerInput } from './dto/create-customer.input';
import { UpdateCustomerInput } from './dto/update-customer.input';

@Injectable()
export class CustomersService {
  constructor(private readonly prismaService: PrismaService) {}
  create(createCustomerInput: CreateOnecustomersArgs) {
    return this.prismaService.customers.create(createCustomerInput);
  }

  customersConnection(where: customersWhereInput) {
    return this.prismaService.customers.aggregate({
      _count: {
        id: true,
      },
      where,
    });
  }

  findAll(params: FindManycustomersArgs) {
    return this.prismaService.customers.findMany(params);
  }

  findOne(id: string) {
    return this.prismaService.customers.findUnique({
      where: {
        id,
      },
      include: {
        customers_comments_customers: true,
      },
    });
  }

  update(id: number, updateCustomerInput: UpdateCustomerInput) {
    return `This action updates a #${id} customer`;
  }

  remove(id: number) {
    return `This action removes a #${id} customer`;
  }
}
