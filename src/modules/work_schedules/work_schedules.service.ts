import { Injectable } from '@nestjs/common';
import { FindManyworkSchedulesArgs } from 'src/@generated/prisma/find-manywork-schedules.args';
import { UpdateOneworkSchedulesArgs } from 'src/@generated/prisma/update-onework-schedules.args';
import { work_schedulesWhereInput } from 'src/@generated/work-schedules/work-schedules-where.input';
import { work_schedulesCreateArgs } from 'src/helpers/create-one.args';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class WorkSchedulesService {
  constructor(private readonly prismaService: PrismaService) {}
  create(createWorkScheduleInput: work_schedulesCreateArgs) {
    return this.prismaService.work_schedules.create(createWorkScheduleInput);
  }

  workSchedulesConnection(where: work_schedulesWhereInput) {
    return this.prismaService.work_schedules.aggregate({
      _count: {
        id: true,
      },
      where,
    });
  }

  findAll(params: FindManyworkSchedulesArgs) {
    return this.prismaService.work_schedules.findMany(params);
  }

  findOne(id: string) {
    return this.prismaService.work_schedules.findUnique({
      where: {
        id,
      },
    });
  }

  update(updateWorkScheduleInput: UpdateOneworkSchedulesArgs) {
    return this.prismaService.work_schedules.update(updateWorkScheduleInput);
  }

  remove(id: number) {
    return `This action removes a #${id} workSchedule`;
  }
}
