import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { status } from './status.enum';
import { NestedEnumstatusWithAggregatesFilter } from './nested-enumstatus-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumstatusFilter } from './nested-enumstatus-filter.input';

@InputType()
export class EnumstatusWithAggregatesFilter {

    @Field(() => status, {nullable:true})
    equals?: keyof typeof status;

    @Field(() => [status], {nullable:true})
    in?: Array<keyof typeof status>;

    @Field(() => [status], {nullable:true})
    notIn?: Array<keyof typeof status>;

    @Field(() => NestedEnumstatusWithAggregatesFilter, {nullable:true})
    not?: NestedEnumstatusWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumstatusFilter, {nullable:true})
    _min?: NestedEnumstatusFilter;

    @Field(() => NestedEnumstatusFilter, {nullable:true})
    _max?: NestedEnumstatusFilter;
}
