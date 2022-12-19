import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AsssetsService } from './asssets.service';
import { Assset } from './entities/assset.entity';
import { CreateAsssetInput } from './dto/create-assset.input';
import { UpdateAsssetInput } from './dto/update-assset.input';
import { FileUpload, GraphQLUpload } from 'graphql-upload-minimal';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '@auth';

@Resolver(() => Assset)
export class AsssetsResolver {
  constructor(private readonly asssetsService: AsssetsService) {}

  @Mutation(() => String)
  @UseGuards(JwtAuthGuard)
  async uploadFile(
    @Args({ name: 'file', type: () => GraphQLUpload }) file: FileUpload,
    @Args('modelId', { type: () => String }) modelId: string,
  ) {
    return this.asssetsService.uploadFile(file, modelId);
  }

  @Mutation(() => Boolean)
  @UseGuards(JwtAuthGuard)
  async removeFile(@Args('url', { type: () => String }) url: string) {
    return this.asssetsService.removeFile(url);
  }
}
