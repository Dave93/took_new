import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class AuthAccessRolesDto {
  @Field(() => String, { description: 'Role name' })
  name: string;

  @Field(() => [String], { description: 'Role permissions' })
  permissions: string;

  @Field(() => Boolean, { description: 'Role active' })
  active: boolean;
}

@ObjectType()
export class AuthAccessDto {
  @Field(() => [String], { description: 'Additional permissions' })
  additionalPermissions: string[];
  @Field(() => [AuthAccessRolesDto], { description: 'Access roles' })
  roles: AuthAccessRolesDto[];
}
