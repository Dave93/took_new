import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { system_configsUpdateManyMutationInput } from '../system-configs/system-configs-update-many-mutation.input';
import { Type } from 'class-transformer';
import { system_configsWhereInput } from '../system-configs/system-configs-where.input';

@ArgsType()
export class UpdateManysystemConfigsArgs {

    @Field(() => system_configsUpdateManyMutationInput, {nullable:false})
    @Type(() => system_configsUpdateManyMutationInput)
    data!: system_configsUpdateManyMutationInput;

    @Field(() => system_configsWhereInput, {nullable:true})
    @Type(() => system_configsWhereInput)
    where?: system_configsWhereInput;
}
