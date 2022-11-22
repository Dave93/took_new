import { Injectable } from '@nestjs/common';
import { order_transactions } from '../../../@generated/order-transactions/order-transactions.model';
import { PrismaService } from '../../../prisma.service';
import { CacheControlService } from '@modules/cache_control/cache_control.service';
import { SearchService } from '@modules/search/search.service';
import axios from 'axios';
import { order_transaction_status } from '../../../@generated/prisma/order-transaction-status.enum';

@Injectable()
export class OrderCompleteService {
  constructor(private readonly prismaService: PrismaService, private readonly cacheService: CacheControlService) {}

  async payTransaction(transaction: order_transactions) {
    const organizations = await this.cacheService.getOrganizations();
    const organization = organizations.find((org) => org.id === transaction.organization_id);
    let requestData: any = {
      method: 'receipt.create_account_transfer',
      params: {
        senderName: organization.sender_name,
        senderId: organization.sender_number,
        amount: transaction.amount * 100,
        receiverName: transaction.order_transactions_couriers.first_name,
        receiverCard: transaction.card_number,
      },
    };
    const externalUrl = 'https://topup.apelsin.uz/api/merchant';
    let outsideRequest = await this.prismaService.outside_requests.create({
      data: {
        request_data: JSON.stringify(requestData),
        external_url: externalUrl,
        request_type: 'POST',
        model_name: 'order_transactions',
        model_id: transaction.id,
      },
    });
    try {
      let response = await axios.post(externalUrl, requestData, {
        headers: {
          'Content-Type': 'application/json',
        },
        auth: {
          username: organization.apelsin_login,
          password: organization.apelsin_password,
        },
      });
      await this.prismaService.outside_requests.update({
        where: {
          id: outsideRequest.id,
        },
        data: {
          response_data: JSON.stringify(response.data),
          response_status: response.status.toString(),
        },
      });
      if (!response.data.error) {
        requestData = {
          method: 'receipt.pay_account_transfer',
          params: {
            id: response.data.result.receipt._id,
            extId: transaction.id,
          },
        };
        outsideRequest = await this.prismaService.outside_requests.create({
          data: {
            request_data: JSON.stringify(requestData),
            external_url: externalUrl,
            request_type: 'POST',
            model_name: 'order_transactions',
            model_id: transaction.id,
          },
        });

        response = await axios.post(externalUrl, requestData, {
          headers: {
            'Content-Type': 'application/json',
          },
          auth: {
            username: organization.apelsin_login,
            password: organization.apelsin_password,
          },
        });

        if (!response.data.error) {
          await this.prismaService.outside_requests.update({
            where: {
              id: outsideRequest.id,
            },
            data: {
              response_data: JSON.stringify(response.data),
              response_status: response.status.toString(),
            },
          });
          await this.prismaService.order_transactions.update({
            where: {
              id: transaction.id,
            },
            data: {
              status: order_transaction_status.success,
            },
          });
        } else {
          if (response.data.error == 'External id exists') {
            const newExternalId = transaction.id + Math.floor(Math.random() * 1000);
            requestData = {
              method: 'receipt.pay_account_transfer',
              params: {
                id: response.data.result.receipt._id,
                extId: newExternalId,
              },
            };
            outsideRequest = await this.prismaService.outside_requests.create({
              data: {
                request_data: JSON.stringify(requestData),
                external_url: externalUrl,
                request_type: 'POST',
                model_name: 'order_transactions',
                model_id: transaction.id,
              },
            });
            response = await axios.post(externalUrl, requestData, {
              headers: {
                'Content-Type': 'application/json',
              },
              auth: {
                username: organization.apelsin_login,
                password: organization.apelsin_password,
              },
            });
            if (!response.data.error) {
              await this.prismaService.outside_requests.update({
                where: {
                  id: outsideRequest.id,
                },
                data: {
                  response_data: JSON.stringify(response.data),
                  response_status: response.status.toString(),
                },
              });
              await this.prismaService.order_transactions.update({
                where: {
                  id: transaction.id,
                },
                data: {
                  status: order_transaction_status.success,
                },
              });
            } else {
              await this.registerError(response.data.error, outsideRequest.id, transaction.id);
            }
          } else {
            await this.registerError(response.data.error, outsideRequest.id, transaction.id);
          }
        }
      } else {
        await this.registerError(response.data.error, outsideRequest.id, transaction.id);
      }
    } catch (error) {
      await this.registerError(error.response.data, outsideRequest.id, transaction.id);
    }
  }

  async registerError(error: any, requestId: string, transactionId: string) {
    await this.prismaService.outside_requests.update({
      where: {
        id: requestId,
      },
      data: {
        response_data: JSON.stringify(error),
        response_status: error.response.status.toString(),
      },
    });
    this.prismaService.order_transactions.update({
      where: {
        id: transactionId,
      },
      data: {
        status: order_transaction_status.failed,
      },
    });
  }
}
