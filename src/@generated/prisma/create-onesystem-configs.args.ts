import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { system_configsCreateInput } from '../system-configs/system-configs-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnesystemConfigsArgs {

    @Field(() => system_configsCreateInput, {nullable:false})
    @Type(() => system_configsCreateInput)
    data!: system_configsCreateInput;
}
