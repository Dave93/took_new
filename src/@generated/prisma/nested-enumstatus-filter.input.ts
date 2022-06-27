import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { status } from './status.enum';

@InputType()
export class NestedEnumstatusFilter {

    @Field(() => status, {nullable:true})
    equals?: keyof typeof status;

    @Field(() => [status], {nullable:true})
    in?: Array<keyof typeof status>;

    @Field(() => [status], {nullable:true})
    notIn?: Array<keyof typeof status>;

    @Field(() => NestedEnumstatusFilter, {nullable:true})
    not?: NestedEnumstatusFilter;
}
