import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { user_status } from './user-status.enum';
import { NestedEnumuser_statusFilter } from './nested-enumuser-status-filter.input';

@InputType()
export class Enumuser_statusFilter {

    @Field(() => user_status, {nullable:true})
    equals?: keyof typeof user_status;

    @Field(() => [user_status], {nullable:true})
    in?: Array<keyof typeof user_status>;

    @Field(() => [user_status], {nullable:true})
    notIn?: Array<keyof typeof user_status>;

    @Field(() => NestedEnumuser_statusFilter, {nullable:true})
    not?: NestedEnumuser_statusFilter;
}
