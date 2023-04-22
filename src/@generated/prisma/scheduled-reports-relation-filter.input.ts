import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { scheduled_reportsWhereInput } from '../scheduled-reports/scheduled-reports-where.input';

@InputType()
export class Scheduled_reportsRelationFilter {

    @Field(() => scheduled_reportsWhereInput, {nullable:true})
    is?: scheduled_reportsWhereInput;

    @Field(() => scheduled_reportsWhereInput, {nullable:true})
    isNot?: scheduled_reportsWhereInput;
}
