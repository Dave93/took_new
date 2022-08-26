import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { users_terminalsCreateManyUsersInput } from './users-terminals-create-many-users.input';
import { Type } from 'class-transformer';

@InputType()
export class users_terminalsCreateManyUsersInputEnvelope {

    @Field(() => [users_terminalsCreateManyUsersInput], {nullable:false})
    @Type(() => users_terminalsCreateManyUsersInput)
    data!: Array<users_terminalsCreateManyUsersInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
