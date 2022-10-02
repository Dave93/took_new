import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CustomersService } from './customers.service';
import { Customer } from './entities/customer.entity';
import { CreateCustomerInput } from './dto/create-customer.input';
import { UpdateCustomerInput } from './dto/update-customer.input';
import { CreateOnecustomersArgs } from 'src/@generated/customers/create-onecustomers.args';
import { PrismaAggregateCount } from '@common/dtos/prisma-aggregate-count';
import { customersWhereInput } from 'src/@generated/customers/customers-where.input';
import { customers } from 'src/@generated/customers/customers.model';
import { FindManycustomersArgs } from 'src/@generated/customers/find-manycustomers.args';
import { Permissions } from '@auth';

@Resolver(() => Customer)
export class CustomersResolver {
  constructor(private readonly customersService: CustomersService) {}

  // @Mutation(() => Customer)
  // customersCreate(@Args() createCustomerInput: CreateOnecustomersArgs) {
  //   return this.customersService.create(createCustomerInput);
  // }

  @Query(() => PrismaAggregateCount, { name: 'customersConnection' })
  @Permissions('customers.list')
  customersConnection(@Args('where') where: customersWhereInput) {
    return this.customersService.customersConnection(where);
  }

  @Query(() => [customers], { name: 'customers' })
  @Permissions('customers.list')
  findAll(@Args() params: FindManycustomersArgs) {
    return this.customersService.findAll(params);
  }

  @Query(() => customers, { name: 'customer' })
  @Permissions('customers.show')
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.customersService.findOne(id);
  }

  @Mutation(() => Customer)
  @Permissions('customers.edit')
  updateCustomer(@Args('updateCustomerInput') updateCustomerInput: UpdateCustomerInput) {
    return this.customersService.update(updateCustomerInput.id, updateCustomerInput);
  }

  @Mutation(() => Customer)
  @Permissions('customers.delete')
  removeCustomer(@Args('id', { type: () => Int }) id: number) {
    return this.customersService.remove(id);
  }
}
