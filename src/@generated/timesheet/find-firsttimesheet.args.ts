import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { timesheetWhereInput } from './timesheet-where.input';
import { Type } from 'class-transformer';
import { timesheetOrderByWithRelationInput } from './timesheet-order-by-with-relation.input';
import { timesheetWhereUniqueInput } from './timesheet-where-unique.input';
import { Int } from '@nestjs/graphql';
import { TimesheetScalarFieldEnum } from '../prisma/timesheet-scalar-field.enum';

@ArgsType()
export class FindFirsttimesheetArgs {

    @Field(() => timesheetWhereInput, {nullable:true})
    @Type(() => timesheetWhereInput)
    where?: timesheetWhereInput;

    @Field(() => [timesheetOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<timesheetOrderByWithRelationInput>;

    @Field(() => timesheetWhereUniqueInput, {nullable:true})
    cursor?: timesheetWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [TimesheetScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof TimesheetScalarFieldEnum>;
}
