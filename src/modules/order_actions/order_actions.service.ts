import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateOrderActionInput } from './dto/create-order_action.input';
import { UpdateOrderActionInput } from './dto/update-order_action.input';

@Injectable()
export class OrderActionsService {
  constructor(private readonly prismaService: PrismaService) {}
  create(createOrderActionInput: CreateOrderActionInput) {
    return 'This action adds a new orderAction';
  }

  findAll() {
    return `This action returns all orderActions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} orderAction`;
  }

  update(id: number, updateOrderActionInput: UpdateOrderActionInput) {
    return `This action updates a #${id} orderAction`;
  }

  remove(id: number) {
    return `This action removes a #${id} orderAction`;
  }

  async findForOrder(id: string) {
    let res = await this.prismaService.order_actions.findMany({
      where: {
        order_id: id,
      },
      orderBy: {
        created_at: 'desc',
      },
      include: {
        order_actions_created_byTousers: true,
      },
    });
    return res;
  }
}
