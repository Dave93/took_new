import { Field, ObjectType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';

@ObjectType()
export class PermissionResponseDto {
  @ApiProperty()
  @Field(() => String, { description: 'Permission id' })
  id: number;

  @ApiProperty()
  @Field(() => String, { description: 'Permission slug' })
  slug: string;

  @ApiProperty()
  @Field(() => String, { description: 'Permission desc' })
  description: string;

  @ApiProperty()
  @Field(() => Boolean, { description: 'Permission active' })
  active: boolean;
}
