import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { organizationUpdateInput } from './organization-update.input';
import { Type } from 'class-transformer';
import { organizationWhereUniqueInput } from './organization-where-unique.input';

@ArgsType()
export class UpdateOneorganizationArgs {

    @Field(() => organizationUpdateInput, {nullable:false})
    @Type(() => organizationUpdateInput)
    data!: organizationUpdateInput;

    @Field(() => organizationWhereUniqueInput, {nullable:false})
    @Type(() => organizationWhereUniqueInput)
    where!: organizationWhereUniqueInput;
}
