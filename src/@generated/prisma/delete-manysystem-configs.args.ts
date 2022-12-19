import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { system_configsWhereInput } from '../system-configs/system-configs-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManysystemConfigsArgs {

    @Field(() => system_configsWhereInput, {nullable:true})
    @Type(() => system_configsWhereInput)
    where?: system_configsWhereInput;
}
