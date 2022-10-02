import { Field, ObjectType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { PermissionResponseDto } from '../../permissions/dtos';

@ObjectType()
export class RoleResponseDto {
  @ApiProperty()
  @Field(() => String, { description: 'Role name' })
  name: string;

  @ApiProperty({ type: [PermissionResponseDto] })
  @Field(() => [PermissionResponseDto], { description: 'Role permissions' })
  permissions: PermissionResponseDto[];

  @ApiProperty()
  @Field(() => Boolean, { description: 'Role Active' })
  active: boolean;
}
