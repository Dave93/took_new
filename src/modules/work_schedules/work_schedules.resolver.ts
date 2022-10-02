import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { WorkSchedulesService } from './work_schedules.service';
import { WorkSchedule } from './entities/work_schedule.entity';
import { work_schedules } from 'src/@generated/work-schedules/work-schedules.model';
import { work_schedulesCreateArgs } from 'src/helpers/create-one.args';
import { FindManyworkSchedulesArgs } from 'src/@generated/prisma/find-manywork-schedules.args';
import { PrismaAggregateCount } from '@common/dtos/prisma-aggregate-count';
import { work_schedulesWhereInput } from 'src/@generated/work-schedules/work-schedules-where.input';
import { UpdateOneworkSchedulesArgs } from 'src/@generated/prisma/update-onework-schedules.args';
import { Permissions } from '@auth';

@Resolver(() => work_schedules)
export class WorkSchedulesResolver {
  constructor(private readonly workSchedulesService: WorkSchedulesService) {}

  @Mutation(() => work_schedules)
  @Permissions('work_schedules.create')
  workScheduleCreate(@Args() createWorkScheduleInput: work_schedulesCreateArgs) {
    return this.workSchedulesService.create(createWorkScheduleInput);
  }
  @Query(() => PrismaAggregateCount, { name: 'workSchedulesConnection' })
  @Permissions('work_schedules.list')
  workSchedulesConnection(@Args('where') where: work_schedulesWhereInput) {
    return this.workSchedulesService.workSchedulesConnection(where);
  }

  @Query(() => [work_schedules], { name: 'workSchedules' })
  @Permissions('work_schedules.list')
  findAll(@Args() params: FindManyworkSchedulesArgs) {
    return this.workSchedulesService.findAll(params);
  }

  @Query(() => work_schedules, { name: 'workSchedule' })
  @Permissions('work_schedules.show')
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.workSchedulesService.findOne(id);
  }

  @Mutation(() => work_schedules)
  @Permissions('work_schedules.edit')
  updateWorkSchedule(@Args() updateWorkScheduleInput: UpdateOneworkSchedulesArgs) {
    return this.workSchedulesService.update(updateWorkScheduleInput);
  }

  @Mutation(() => WorkSchedule)
  @Permissions('work_schedules.delete')
  removeWorkSchedule(@Args('id', { type: () => Int }) id: number) {
    return this.workSchedulesService.remove(id);
  }
}
