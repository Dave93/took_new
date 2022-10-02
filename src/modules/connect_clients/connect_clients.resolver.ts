import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ConnectClientsService } from './connect_clients.service';
import { CheckServiceResult, ConnectClient } from './entities/connect_client.entity';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '@auth';
import { ConfigService } from '@nestjs/config';

@Resolver(() => ConnectClient)
export class ConnectClientsResolver {
  constructor(
    private readonly connectClientsService: ConnectClientsService,
    private readonly configService: ConfigService,
  ) {}

  @Query(() => String, { name: 'getApiUrl' })
  @UseGuards(JwtAuthGuard)
  findAll() {
    const domain = this.configService.get('API_DOMAIN');
    const serviceName = this.configService.get('API_NAME');
    const buff = Buffer.from(`${domain}|${serviceName}`);
    const base64data = buff.toString('base64');
    // random string with 6 characters
    const randomString = Math.random().toString(36).substring(2, 8);
    const hexBuffer = Buffer.from(`${randomString}${base64data}`);
    const hex = hexBuffer.toString('hex');
    return `${hex}`;
  }

  @Query(() => CheckServiceResult, { name: 'checkService' })
  checkService() {
    return {
      result: true,
    };
  }
}
