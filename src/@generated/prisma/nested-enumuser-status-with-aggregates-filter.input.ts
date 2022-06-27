import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { user_status } from './user-status.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumuser_statusFilter } from './nested-enumuser-status-filter.input';

@InputType()
export class NestedEnumuser_statusWithAggregatesFilter {

    @Field(() => user_status, {nullable:true})
    equals?: keyof typeof user_status;

    @Field(() => [user_status], {nullable:true})
    in?: Array<keyof typeof user_status>;

    @Field(() => [user_status], {nullable:true})
    notIn?: Array<keyof typeof user_status>;

    @Field(() => NestedEnumuser_statusWithAggregatesFilter, {nullable:true})
    not?: NestedEnumuser_statusWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumuser_statusFilter, {nullable:true})
    _min?: NestedEnumuser_statusFilter;

    @Field(() => NestedEnumuser_statusFilter, {nullable:true})
    _max?: NestedEnumuser_statusFilter;
}
