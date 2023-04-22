import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';
import { user_status } from 'src/@generated/prisma/user-status.enum';
import { PermissionResponseDto } from '../../permissions/dtos';
import { RoleResponseDto } from '../../roles/dtos';

// registerEnumType(user_status, {
//   name: 'user_status',
// });

@ObjectType()
export class UserResponseDto {
  @Field(() => String, { description: 'User id' })
  id: string;

  @Field(() => String, { description: 'User phone' })
  phone: string;

  @Field(() => String, { description: 'User first name', nullable: true })
  first_name?: string;

  @Field(() => String, { description: 'User last name', nullable: true })
  last_name?: string;

  @Field(() => [RoleResponseDto], { description: 'User roles' })
  roles?: RoleResponseDto[];

  @Field(() => [PermissionResponseDto], { description: 'User permissions', nullable: true })
  permissions?: PermissionResponseDto[];

  @Field(() => Boolean, { description: 'User status' })
  is_super_user: boolean;

  @Field(() => user_status, { description: 'User status' })
  status: user_status;

  @Field(() => [String], { description: 'iiko terminal id' })
  terminal_id: string[];

  @Field(() => String, { description: 'Project' })
  project: string;

  @Field(() => Boolean, { description: 'User online/offline' })
  is_online: boolean;

  @Field(() => Number, { nullable: true })
  wallet_balance: number;

  @Field(() => String, { nullable: true })
  api_token: string;
}
