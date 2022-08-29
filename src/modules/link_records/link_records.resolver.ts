import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { LinkRecordsService } from './link_records.service';
import { LinkRecord } from './entities/link_record.entity';
import { users_roles } from 'src/@generated/users-roles/users-roles.model';
import { users_terminals } from 'src/@generated/users-terminals/users-terminals.model';
import { users_work_schedules } from 'src/@generated/users-work-schedules/users-work-schedules.model';
import { BatchPayload } from '@helpers';

@Resolver(() => LinkRecord)
export class LinkRecordsResolver {
  constructor(private readonly linkRecordsService: LinkRecordsService) {}

  @Mutation(() => users_roles)
  linkUserToRoles(
    @Args('userId', { type: () => String }) userId: string,
    @Args('roleId', { type: () => String }) roleId: string,
  ) {
    return this.linkRecordsService.linkUserToRoles(userId, roleId);
  }

  @Mutation(() => BatchPayload)
  linkUserToTerminals(
    @Args('userId', { type: () => String }) userId: string,
    @Args('terminalId', { type: () => [String] }) terminalId: string[],
  ) {
    return this.linkRecordsService.linkUserToTerminals(userId, terminalId);
  }

  @Mutation(() => BatchPayload)
  linkUserToWorkSchedules(
    @Args('userId', { type: () => String }) userId: string,
    @Args('workScheduleId', { type: () => [String] }) workScheduleId: string[],
  ) {
    return this.linkRecordsService.linkUserToWorkSchedules(userId, workScheduleId);
  }
}
