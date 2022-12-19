import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { system_configsWhereInput } from '../system-configs/system-configs-where.input';
import { Type } from 'class-transformer';
import { system_configsOrderByWithRelationInput } from '../system-configs/system-configs-order-by-with-relation.input';
import { system_configsWhereUniqueInput } from '../system-configs/system-configs-where-unique.input';
import { Int } from '@nestjs/graphql';
import { System_configsScalarFieldEnum } from './system-configs-scalar-field.enum';

@ArgsType()
export class FindFirstsystemConfigsArgs {

    @Field(() => system_configsWhereInput, {nullable:true})
    @Type(() => system_configsWhereInput)
    where?: system_configsWhereInput;

    @Field(() => [system_configsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<system_configsOrderByWithRelationInput>;

    @Field(() => system_configsWhereUniqueInput, {nullable:true})
    cursor?: system_configsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [System_configsScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof System_configsScalarFieldEnum>;
}
