import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class LinkRecordsService {
  constructor(private readonly prismaService: PrismaService) {}

  async linkUserToRoles(user_id: string, role_id: string) {
    await this.prismaService.users_roles.deleteMany({
      where: {
        user_id,
      },
    });
    return this.prismaService.users_roles.create({
      data: {
        user_id,
        role_id,
      },
    });
  }

  async linkUserToTerminals(user_id: string, terminal_id: string[]) {
    await this.prismaService.users_terminals.deleteMany({
      where: {
        user_id,
      },
    });
    return this.prismaService.users_terminals.createMany({
      data: terminal_id.map((id) => ({
        user_id,
        terminal_id: id,
      })),
    });
  }

  async linkUserToWorkSchedules(userId: string, workScheduleId: string[]) {
    await this.prismaService.users_work_schedules.deleteMany({
      where: {
        user_id: userId,
      },
    });
    return this.prismaService.users_work_schedules.createMany({
      data: workScheduleId.map((id) => ({
        user_id: userId,
        work_schedule_id: id,
      })),
    });
  }
}
