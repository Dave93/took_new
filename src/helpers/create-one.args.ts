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
