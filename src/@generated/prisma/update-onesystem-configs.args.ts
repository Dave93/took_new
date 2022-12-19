import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { system_configsUpdateInput } from '../system-configs/system-configs-update.input';
import { Type } from 'class-transformer';
import { system_configsWhereUniqueInput } from '../system-configs/system-configs-where-unique.input';

@ArgsType()
export class UpdateOnesystemConfigsArgs {

    @Field(() => system_configsUpdateInput, {nullable:false})
    @Type(() => system_configsUpdateInput)
    data!: system_configsUpdateInput;

    @Field(() => system_configsWhereUniqueInput, {nullable:false})
    @Type(() => system_configsWhereUniqueInput)
    where!: system_configsWhereUniqueInput;
}
