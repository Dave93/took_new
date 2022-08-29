import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { LinkRecordsService } from './link_records.service';
import { LinkRecord } from './entities/link_record.entity';
import { CreateLinkRecordInput } from './dto/create-link_record.input';
import { UpdateLinkRecordInput } from './dto/update-link_record.input';

@Resolver(() => LinkRecord)
export class LinkRecordsResolver {
  constructor(private readonly linkRecordsService: LinkRecordsService) {}

  linkUserToRoles(
    @Args('userId', { type: () => String }) userId: string,
    @Args('roleId', { type: () => String }) roleId: string,
  ) {
    return this.linkRecordsService.linkUserToRoles(userId, roleId);
  }
}
