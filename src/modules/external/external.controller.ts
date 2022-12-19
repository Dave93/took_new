import { Controller, Get, Post, Body, Patch, Param, Delete, Request } from '@nestjs/common';
import { ExternalService } from './external.service';
import { CreateExternalDto, PostOrderScoreDto } from './dto/create-external.dto';
import { UpdateExternalDto } from './dto/update-external.dto';
import { ApiBearerAuth } from '@nestjs/swagger';
import { TOKEN_NAME } from '@auth';

@ApiBearerAuth(TOKEN_NAME)
@Controller('external')
export class ExternalController {
  constructor(private readonly externalService: ExternalService) {}

  @Post('/create-order')
  create(@Body() createExternalDto: CreateExternalDto, @Request() req) {
    return this.externalService.create(createExternalDto, req);
  }

  @Post('/dev')
  dev(@Body() createExternalDto: any, @Request() req) {
    return this.externalService.dev(createExternalDto, req);
  }

  @Post('/set-score')
  setScore(@Body() orderScore: PostOrderScoreDto, @Request() req) {
    return this.externalService.setScore(orderScore, req);
  }
}
