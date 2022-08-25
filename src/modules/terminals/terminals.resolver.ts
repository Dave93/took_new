import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TerminalsService } from './terminals.service';
import { UpdateTerminalInput } from './dto/update-terminal.input';
import { terminals } from 'src/@generated/terminals/terminals.model';
import { terminalsCreateArgs } from 'src/helpers/create-one.args';
import { PrismaAggregateCount } from '@common/dtos/prisma-aggregate-count';
import { terminalsWhereInput } from 'src/@generated/terminals/terminals-where.input';
import { FindManyterminalsArgs } from 'src/@generated/terminals/find-manyterminals.args';
import { UpdateOneterminalsArgs } from 'src/@generated/terminals/update-oneterminals.args';

@Resolver(() => terminals)
export class TerminalsResolver {
  constructor(private readonly terminalsService: TerminalsService) {}

  @Mutation(() => terminals)
  terminalCreate(@Args() createTerminalInput: terminalsCreateArgs) {
    return this.terminalsService.create(createTerminalInput);
  }

  @Query(() => PrismaAggregateCount, { name: 'terminalConnection' })
  terminalConnection(@Args('where') where: terminalsWhereInput) {
    return this.terminalsService.terminalConnection(where);
  }

  @Query(() => [terminals], { name: 'terminals' })
  findAll(@Args() params: FindManyterminalsArgs) {
    return this.terminalsService.findAll(params);
  }

  @Query(() => terminals, { name: 'terminal' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.terminalsService.findOne(id);
  }

  @Mutation(() => terminals)
  updateTerminal(@Args() updateTerminalInput: UpdateOneterminalsArgs) {
    return this.terminalsService.update(updateTerminalInput);
  }

  @Mutation(() => terminals)
  removeTerminal(@Args('id', { type: () => Int }) id: number) {
    return this.terminalsService.remove(id);
  }
}
