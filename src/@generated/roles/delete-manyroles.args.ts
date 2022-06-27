import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { rolesWhereInput } from './roles-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyrolesArgs {

    @Field(() => rolesWhereInput, {nullable:true})
    @Type(() => rolesWhereInput)
    where?: rolesWhereInput;
}
