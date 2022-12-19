import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { FileUpload } from 'graphql-upload-minimal';
import { CreateOnecustomersArgs } from 'src/@generated/customers/create-onecustomers.args';
import { customersWhereInput } from 'src/@generated/customers/customers-where.input';
import { FindManycustomersArgs } from 'src/@generated/customers/find-manycustomers.args';
import { PrismaService } from 'src/prisma.service';
import { CreateCustomerInput } from './dto/create-customer.input';
import { UpdateCustomerInput } from './dto/update-customer.input';
import { join } from 'path';
import { createWriteStream, mkdirSync } from 'fs';
import { AsssetsService } from '@modules/asssets/asssets.service';

@Injectable()
export class CustomersService {
  constructor(private readonly prismaService: PrismaService, private readonly assetsService: AsssetsService) {}
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

  async customerComments(customerId: string, orderId: string = null) {
    const res = await this.prismaService.customers_comments.findMany({
      where: {
        customer_id: customerId,
      },
      select: {
        id: true,
        comment: true,
        customer_id: true,
        created_at: true,
        customers_comments_voice_idToassets: {
          select: {
            id: true,
            model: true,
            file_name: true,
            sub_folder: true,
          },
        },
        customers_comments_image_idToassets: {
          select: {
            id: true,
            model: true,
            file_name: true,
            sub_folder: true,
          },
        },
      },
      orderBy: {
        created_by: 'desc',
      },
    });
    if (orderId) {
      const order = await this.prismaService.orders.findUnique({
        where: {
          id: orderId,
        },
        select: {
          id: true,
          delivery_comment: true,
        },
      });
      if (order.delivery_comment) {
        res.push({
          id: orderId,
          comment: order.delivery_comment,
          customer_id: customerId,
          created_at: new Date(),
          customers_comments_image_idToassets: null,
          customers_comments_voice_idToassets: null,
        });
      }
    }

    return res;
  }

  createCustomerComment(customerId: string, comment: string) {
    return this.prismaService.customers_comments.create({
      data: {
        comment,
        customer_id: customerId,
      },
      select: {
        id: true,
        comment: true,
        customer_id: true,
        created_at: true,
        customers_comments_voice_idToassets: {
          select: {
            id: true,
            model: true,
            file_name: true,
            sub_folder: true,
          },
        },
        customers_comments_image_idToassets: {
          select: {
            id: true,
            model: true,
            file_name: true,
            sub_folder: true,
          },
        },
      },
    });
  }

  async uploadCustomerVoiceComment(customerId: string, file: FileUpload) {
    const asset = await this.assetsService.saveModelAssets(file, 'customers_comments');
    return this.prismaService.customers_comments.create({
      data: {
        customer_id: customerId,
        voice_id: asset.id,
      },
      select: {
        id: true,
        customer_id: true,
        comment: true,
        created_at: true,
        customers_comments_voice_idToassets: {
          select: {
            id: true,
            model: true,
            file_name: true,
            sub_folder: true,
          },
        },
        customers_comments_image_idToassets: {
          select: {
            id: true,
            model: true,
            file_name: true,
            sub_folder: true,
          },
        },
      },
    });
  }

  async uploadCustomerImageComment(customerId: string, file: FileUpload) {
    const asset = await this.assetsService.saveModelAssets(file, 'customers_comments');
    return this.prismaService.customers_comments.create({
      data: {
        customer_id: customerId,
        image_id: asset.id,
      },
      select: {
        id: true,
        customer_id: true,
        comment: true,
        created_at: true,
        customers_comments_voice_idToassets: {
          select: {
            id: true,
            model: true,
            file_name: true,
            sub_folder: true,
          },
        },
        customers_comments_image_idToassets: {
          select: {
            id: true,
            model: true,
            file_name: true,
            sub_folder: true,
          },
        },
      },
    });
  }
}
