import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { system_configsWhereUniqueInput } from '../system-configs/system-configs-where-unique.input';
import { Type } from 'class-transformer';
import { system_configsCreateInput } from '../system-configs/system-configs-create.input';
import { system_configsUpdateInput } from '../system-configs/system-configs-update.input';

@ArgsType()
export class UpsertOnesystemConfigsArgs {

    @Field(() => system_configsWhereUniqueInput, {nullable:false})
    @Type(() => system_configsWhereUniqueInput)
    where!: system_configsWhereUniqueInput;

    @Field(() => system_configsCreateInput, {nullable:false})
    @Type(() => system_configsCreateInput)
    create!: system_configsCreateInput;

    @Field(() => system_configsUpdateInput, {nullable:false})
    @Type(() => system_configsUpdateInput)
    update!: system_configsUpdateInput;
}
