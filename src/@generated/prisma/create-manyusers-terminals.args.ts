import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { users_terminalsCreateManyInput } from '../users-terminals/users-terminals-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyusersTerminalsArgs {

    @Field(() => [users_terminalsCreateManyInput], {nullable:false})
    @Type(() => users_terminalsCreateManyInput)
    data!: Array<users_terminalsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
