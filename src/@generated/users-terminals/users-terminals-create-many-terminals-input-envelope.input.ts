import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { users_terminalsCreateManyTerminalsInput } from './users-terminals-create-many-terminals.input';
import { Type } from 'class-transformer';

@InputType()
export class users_terminalsCreateManyTerminalsInputEnvelope {

    @Field(() => [users_terminalsCreateManyTerminalsInput], {nullable:false})
    @Type(() => users_terminalsCreateManyTerminalsInput)
    data!: Array<users_terminalsCreateManyTerminalsInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
