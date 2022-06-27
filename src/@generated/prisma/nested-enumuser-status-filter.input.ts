import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { user_status } from './user-status.enum';

@InputType()
export class NestedEnumuser_statusFilter {

    @Field(() => user_status, {nullable:true})
    equals?: keyof typeof user_status;

    @Field(() => [user_status], {nullable:true})
    in?: Array<keyof typeof user_status>;

    @Field(() => [user_status], {nullable:true})
    notIn?: Array<keyof typeof user_status>;

    @Field(() => NestedEnumuser_statusFilter, {nullable:true})
    not?: NestedEnumuser_statusFilter;
}
