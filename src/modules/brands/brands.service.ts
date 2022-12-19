import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateBrandInput } from './dto/create-brand.input';
import { UpdateBrandInput } from './dto/update-brand.input';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../../prisma.service';
import { brandsWhereInput } from '../../@generated/brands/brands-where.input';
import { FindManybrandsArgs } from '../../@generated/brands/find-manybrands.args';
import { brandsCreateArgs } from '../../helpers/create-one.args';
import { UpdateOnebrandsArgs } from '../../@generated/brands/update-onebrands.args';

@Injectable()
export class BrandsService {
  constructor(private readonly configService: ConfigService, private readonly prismaService: PrismaService) {}

  async create(createBrandInput: brandsCreateArgs) {
    const apiDomain = this.configService.get('API_DOMAIN');
    if (apiDomain !== 'api.arryt.uz') {
      throw new BadRequestException('You can not create brand');
    }
    return this.prismaService.brands.create(createBrandInput);
  }

  async findAll(params: FindManybrandsArgs) {
    const res = await this.prismaService.brands.findMany(params);
    return res.map((item) => {
      const domain = item.api_url;
      const serviceName = item.name;
      const buff = Buffer.from(`${domain}|${serviceName}`);
      const base64data = buff.toString('base64');
      // random string with 6 characters
      const randomString = Math.random().toString(36).substring(2, 8);
      const hexBuffer = Buffer.from(`${randomString}${base64data}`);
      const hex = hexBuffer.toString('hex');
      delete item.api_url;
      return {
        ...item,
        sign: hex,
      };
    });
  }

  async findOne(id: string) {
    const apiDomain = this.configService.get('API_DOMAIN');
    if (apiDomain !== 'api.arryt.uz') {
      throw new BadRequestException('You can not create brand');
    }
    return this.prismaService.brands.findUnique({
      where: {
        id,
      },
    });
  }

  async update(updateBrandInput: UpdateOnebrandsArgs) {
    const apiDomain = this.configService.get('API_DOMAIN');
    if (apiDomain !== 'api.arryt.uz') {
      throw new BadRequestException('You can not create brand');
    }
    return this.prismaService.brands.update(updateBrandInput);
  }

  remove(id: number) {
    return `This action removes a #${id} brand`;
  }

  brandsConnection(where: brandsWhereInput) {
    return this.prismaService.brands.aggregate({
      _count: {
        id: true,
      },
      where,
    });
  }
}
