import { Controller, Get, Post, Body, Patch, Param, Delete, Request, HttpCode, UseGuards } from '@nestjs/common';
import { ExternalService } from './external.service';
import {
  CreateExternalDto,
  PostOrderCalculateCustomerPriceDto,
  PostOrderCancelDto,
  PostOrderLocationChangeDto,
  PostOrderScoreDto,
  PostOrderTerminalChangeDto,
} from './dto/create-external.dto';
import { UpdateExternalDto } from './dto/update-external.dto';
import { ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard, TOKEN_NAME } from '@auth';
import { SearchService } from '@modules/search/search.service';

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

  @Post('/change-location')
  changeLocation(@Body() locationData: PostOrderLocationChangeDto, @Request() req) {
    return this.externalService.changeLocation(locationData, req);
  }
  @Post('/cancel-order')
  cancelOrder(@Body() orderData: PostOrderCancelDto, @Request() req) {
    return this.externalService.cancelOrder(orderData, req);
  }

  @Post('/change-terminal')
  changeTerminal(@Body() terminalData: PostOrderTerminalChangeDto, @Request() req) {
    return this.externalService.changeTerminal(terminalData, req);
  }

  @Post('/calculate-customer-price')
  @HttpCode(200)
  calculateCustomerPrice(@Body() data: PostOrderCalculateCustomerPriceDto, @Request() req) {
    return this.externalService.calculateCustomerPrice(data, req);
  }

  @Post('/store-location')
  @UseGuards(JwtAuthGuard)
  storeLocation(@Body() data: any, @Request() req) {
    return this.externalService.storeLocation(data, req);
  }

  @Get('/track/:id')
  track(@Param('id') id: string, @Request() req) {
    return this.externalService.track(id, req);
  }
}
