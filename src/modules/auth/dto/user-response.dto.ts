import { user_status } from '@prisma/client';
import { PermissionResponseDto } from '../../permissions/dtos';
import { RoleResponseDto } from '../../roles/dtos';

export class UserResponseDto {
  id: string;

  username: string;

  firstName: string;

  lastName: string;

  roles?: RoleResponseDto[];

  permissions?: PermissionResponseDto[];

  isSuperUser: boolean;

  status: user_status;

  iiko_terminal_id: string;

  project: string;
}
