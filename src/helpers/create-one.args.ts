import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { delivery_pricingCreateInput } from 'src/@generated/delivery-pricing/delivery-pricing-create.input';
import { Type } from 'class-transformer';
import { delivery_pricingUncheckedCreateInput } from 'src/@generated/delivery-pricing/delivery-pricing-unchecked-create.input';
import { permissionsCreateInput } from 'src/@generated/permissions/permissions-create.input';
import { permissionsUncheckedCreateInput } from 'src/@generated/permissions/permissions-unchecked-create.input';
import { rolesCreateInput } from 'src/@generated/roles/roles-create.input';
import { rolesUncheckedCreateInput } from 'src/@generated/roles/roles-unchecked-create.input';
import { roles_permissionsCreateInput } from 'src/@generated/roles-permissions/roles-permissions-create.input';
import { roles_permissionsUncheckedCreateInput } from 'src/@generated/roles-permissions/roles-permissions-unchecked-create.input';
import { organizationCreateInput } from 'src/@generated/organization/organization-create.input';
import { organizationUncheckedCreateInput } from 'src/@generated/organization/organization-unchecked-create.input';
import { work_schedulesCreateInput } from 'src/@generated/work-schedules/work-schedules-create.input';
import { work_schedulesUncheckedCreateInput } from 'src/@generated/work-schedules/work-schedules-unchecked-create.input';
import { terminalsCreateInput } from 'src/@generated/terminals/terminals-create.input';
import { terminalsUncheckedCreateInput } from 'src/@generated/terminals/terminals-unchecked-create.input';
import { usersUncheckedCreateInput } from 'src/@generated/users/users-unchecked-create.input';
import { usersCreateInput } from 'src/@generated/users/users-create.input';
import { order_statusUncheckedCreateInput } from 'src/@generated/order-status/order-status-unchecked-create.input';
import { order_statusCreateInput } from 'src/@generated/order-status/order-status-create.input';
import { api_tokensUncheckedCreateInput } from '../@generated/api-tokens/api-tokens-unchecked-create.input';
import { api_tokensCreateInput } from '../@generated/api-tokens/api-tokens-create.input';
import { delivery_pricingUpdateInput } from '../@generated/delivery-pricing/delivery-pricing-update.input';
import { delivery_pricingUncheckedUpdateInput } from '../@generated/delivery-pricing/delivery-pricing-unchecked-update.input';
import { delivery_pricingWhereUniqueInput } from '../@generated/delivery-pricing/delivery-pricing-where-unique.input';
import { brandsUncheckedCreateInput } from '../@generated/brands/brands-unchecked-create.input';
import { brandsCreateInput } from '../@generated/brands/brands-create.input';
import { order_transactionsUncheckedCreateInput } from '../@generated/order-transactions/order-transactions-unchecked-create.input';
import { order_transactionsCreateInput } from '../@generated/order-transactions/order-transactions-create.input';
import { order_bonus_pricingUncheckedCreateInput } from '../@generated/order-bonus-pricing/order-bonus-pricing-unchecked-create.input';
import { order_bonus_pricingCreateInput } from '../@generated/order-bonus-pricing/order-bonus-pricing-create.input';
import { order_bonus_pricingUncheckedUpdateInput } from '../@generated/order-bonus-pricing/order-bonus-pricing-unchecked-update.input';
import { order_bonus_pricingUpdateInput } from '../@generated/order-bonus-pricing/order-bonus-pricing-update.input';
import { order_bonus_pricingWhereUniqueInput } from '../@generated/order-bonus-pricing/order-bonus-pricing-where-unique.input';

type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };
type XOR<T, U> = T extends object ? (U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U) : T;

@ArgsType()
export class CreateOnedeliveryPricingArgs {
  @Field(() => delivery_pricingUncheckedCreateInput, { nullable: false })
  @Type(() => delivery_pricingUncheckedCreateInput)
  data!: XOR<delivery_pricingCreateInput, delivery_pricingUncheckedCreateInput>;
}

@ArgsType()
export class CreateOnepermissionsArgs {
  @Field(() => permissionsUncheckedCreateInput, { nullable: false })
  @Type(() => permissionsUncheckedCreateInput)
  data!: XOR<permissionsCreateInput, permissionsUncheckedCreateInput>;
}

@ArgsType()
export class CreateOnerolesArgs {
  @Field(() => rolesUncheckedCreateInput, { nullable: false })
  @Type(() => rolesUncheckedCreateInput)
  data!: XOR<rolesCreateInput, rolesUncheckedCreateInput>;
}

@ArgsType()
export class CreateOnerolesPermissionsArgs {
  @Field(() => roles_permissionsUncheckedCreateInput, { nullable: false })
  @Type(() => roles_permissionsUncheckedCreateInput)
  data!: XOR<roles_permissionsCreateInput, roles_permissionsUncheckedCreateInput>;
}

@ArgsType()
export class organizationCreateArgs {
  @Field(() => organizationUncheckedCreateInput, { nullable: false })
  @Type(() => organizationUncheckedCreateInput)
  data!: XOR<organizationCreateInput, organizationUncheckedCreateInput>;
}

@ArgsType()
export class work_schedulesCreateArgs {
  @Field(() => work_schedulesUncheckedCreateInput, { nullable: false })
  @Type(() => work_schedulesUncheckedCreateInput)
  data: XOR<work_schedulesCreateInput, work_schedulesUncheckedCreateInput>;
}

@ArgsType()
export class terminalsCreateArgs {
  @Field(() => terminalsUncheckedCreateInput, { nullable: false })
  @Type(() => terminalsUncheckedCreateInput)
  data: XOR<terminalsCreateInput, terminalsUncheckedCreateInput>;
}

@ArgsType()
export class usersCreateArgs {
  @Field(() => usersUncheckedCreateInput, { nullable: false })
  @Type(() => usersUncheckedCreateInput)
  data: XOR<usersCreateInput, usersUncheckedCreateInput>;
}

@ArgsType()
export class order_statusCreateArgs {
  @Field(() => order_statusUncheckedCreateInput, { nullable: false })
  @Type(() => order_statusUncheckedCreateInput)
  data: XOR<order_statusCreateInput, order_statusUncheckedCreateInput>;
}

@ArgsType()
export class api_tokensCreateArgs {
  @Field(() => api_tokensUncheckedCreateInput, { nullable: false })
  @Type(() => api_tokensUncheckedCreateInput)
  data: XOR<api_tokensCreateInput, api_tokensUncheckedCreateInput>;
}

@ArgsType()
export class delivery_pricingUpdateArgs {
  @Field(() => delivery_pricingUncheckedUpdateInput, { nullable: false })
  @Type(() => delivery_pricingUncheckedUpdateInput)
  data: XOR<delivery_pricingUpdateInput, delivery_pricingUncheckedUpdateInput>;
  /**
   * Choose, which delivery_pricing to update.
   *
   **/
  @Field(() => delivery_pricingWhereUniqueInput, { nullable: false })
  @Type(() => delivery_pricingWhereUniqueInput)
  where: delivery_pricingWhereUniqueInput;
}

@ArgsType()
export class order_bonus_pricingUpdateArgs {
  @Field(() => order_bonus_pricingUncheckedUpdateInput, { nullable: false })
  @Type(() => order_bonus_pricingUncheckedUpdateInput)
  data: XOR<order_bonus_pricingUpdateInput, order_bonus_pricingUncheckedUpdateInput>;
  /**
   * Choose, which delivery_pricing to update.
   *
   **/
  @Field(() => order_bonus_pricingWhereUniqueInput, { nullable: false })
  @Type(() => order_bonus_pricingWhereUniqueInput)
  where: order_bonus_pricingWhereUniqueInput;
}

@ArgsType()
export class brandsCreateArgs {
  @Field(() => brandsUncheckedCreateInput, { nullable: false })
  @Type(() => brandsUncheckedCreateInput)
  data!: XOR<brandsCreateInput, brandsUncheckedCreateInput>;
}

@ArgsType()
export class CreateOneorderTransactionsArgs {
  @Field(() => order_transactionsUncheckedCreateInput, { nullable: false })
  @Type(() => order_transactionsUncheckedCreateInput)
  data!: XOR<order_transactionsCreateInput, order_transactionsUncheckedCreateInput>;
}

@ArgsType()
export class CreateOneorderBonusPricingArgs {
  @Field(() => order_bonus_pricingUncheckedCreateInput, { nullable: false })
  @Type(() => order_bonus_pricingUncheckedCreateInput)
  data!: XOR<order_bonus_pricingCreateInput, order_bonus_pricingUncheckedCreateInput>;
}
