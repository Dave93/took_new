import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { usersCreateInput } from './users-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneusersArgs {

    @Field(() => usersCreateInput, {nullable:false})
    @Type(() => usersCreateInput)
    data!: usersCreateInput;
}
