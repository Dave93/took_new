import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { scheduled_reportsWhereInput } from '../scheduled-reports/scheduled-reports-where.input';
import { Type } from 'class-transformer';
import { scheduled_reportsOrderByWithRelationInput } from '../scheduled-reports/scheduled-reports-order-by-with-relation.input';
import { scheduled_reportsWhereUniqueInput } from '../scheduled-reports/scheduled-reports-where-unique.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class AggregatescheduledReportsArgs {

    @Field(() => scheduled_reportsWhereInput, {nullable:true})
    @Type(() => scheduled_reportsWhereInput)
    where?: scheduled_reportsWhereInput;

    @Field(() => [scheduled_reportsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<scheduled_reportsOrderByWithRelationInput>;

    @Field(() => scheduled_reportsWhereUniqueInput, {nullable:true})
    cursor?: scheduled_reportsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
