import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { permissionsCreateInput } from './permissions-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnepermissionsArgs {
  @Field(() => permissionsCreateInput, { nullable: false })
  @Type(() => permissionsCreateInput)
  data!: permissionsCreateInput;
}
