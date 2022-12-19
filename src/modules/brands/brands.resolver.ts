import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { BrandsService } from './brands.service';
import { Brand } from './entities/brand.entity';
import { CreateBrandInput } from './dto/create-brand.input';
import { UpdateBrandInput } from './dto/update-brand.input';
import { PrismaAggregateCount } from '@common/dtos/prisma-aggregate-count';
import { Permissions } from '@auth';
import { customersWhereInput } from '../../@generated/customers/customers-where.input';
import { customers } from '../../@generated/customers/customers.model';
import { FindManycustomersArgs } from '../../@generated/customers/find-manycustomers.args';
import { brands } from '../../@generated/brands/brands.model';
import { brandsWhereInput } from '../../@generated/brands/brands-where.input';
import { FindManybrandsArgs } from '../../@generated/brands/find-manybrands.args';
import { brandsCreateInput } from '../../@generated/brands/brands-create.input';
import { brandsCreateArgs } from '../../helpers/create-one.args';
import { UpdateOnebrandsArgs } from '../../@generated/brands/update-onebrands.args';

@Resolver(() => Brand)
export class BrandsResolver {
  constructor(private readonly brandsService: BrandsService) {}

  @Query(() => PrismaAggregateCount, { name: 'brandsConnection' })
  brandsConnection(@Args('where') where: brandsWhereInput) {
    return this.brandsService.brandsConnection(where);
  }

  @Query(() => [Brand], { name: 'brands' })
  findAll(@Args() params: FindManybrandsArgs) {
    return this.brandsService.findAll(params);
  }

  @Mutation(() => brands)
  @Permissions('brands.create')
  brandCreate(@Args() data: brandsCreateArgs) {
    return this.brandsService.create(data);
  }

  @Query(() => brands, { name: 'brand' })
  @Permissions('brands.show')
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.brandsService.findOne(id);
  }

  @Mutation(() => brands)
  @Permissions('brands.edit')
  updateBrand(@Args() updateBrandInput: UpdateOnebrandsArgs) {
    return this.brandsService.update(updateBrandInput);
  }

  @Mutation(() => Brand)
  removeBrand(@Args('id', { type: () => Int }) id: number) {
    return this.brandsService.remove(id);
  }
}
