import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { rolesCreateInput } from './roles-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnerolesArgs {

    @Field(() => rolesCreateInput, {nullable:false})
    @Type(() => rolesCreateInput)
    data!: rolesCreateInput;
}
